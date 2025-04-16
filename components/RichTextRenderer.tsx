"use client"

import React from "react"

interface ChildNode {
  text: string
  type?: string
  code?: boolean
  bold?: boolean
  italic?: boolean
  underline?: boolean
  url?: string
}

interface Node {
  type: string
  level?: number
  url?: string
  alt?: string
  title?: string
  width?: number
  height?: number
  children?: ChildNode[]
  items?: Node[]
}

export default function RichTextRenderer({ content }: { content: Node[] }) {
  const renderText = (children: ChildNode[]) => {
    return children.map((child, index) => {
      const hasFormatting =
        child.code || child.bold || child.italic || child.underline || child.type === "link"

      let textNode: React.ReactNode = child.text

      if (child.code) textNode = <code key={index}>{textNode}</code>
      if (child.bold) textNode = <strong key={index}>{textNode}</strong>
      if (child.italic) textNode = <em key={index}>{textNode}</em>
      if (child.underline) textNode = <u key={index}>{textNode}</u>

      if (child.type === "link" && child.url) {
        return (
          <a
            key={index}
            href={child.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {textNode}
          </a>
        )
      }

      if (!hasFormatting) {
        return <React.Fragment key={index}>{textNode}</React.Fragment>
      }

      return <span key={index}>{textNode}</span>
    })
  }

  const renderListItems = (items: Node[]) =>
    items.map((item, index) => (
      <li key={index}>
        {item.children ? renderText(item.children) : null}
        {item.items ? renderList(item) : null}
      </li>
    ))

  const renderList = (node: Node) => {
    if (node.type === "ul") {
      return <ul className="list-disc ml-6">{renderListItems(node.items ?? [])}</ul>
    }
    if (node.type === "ol") {
      return <ol className="list-decimal ml-6">{renderListItems(node.items ?? [])}</ol>
    }
    return null
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {content.map((node, index) => {
        if (node.type === "paragraph") {
          return <p key={index}>{renderText(node.children ?? [])}</p>
        }

        if (node.type === "heading") {
          const level = node.level ?? 2
          const HeadingTag = `h${Math.min(Math.max(level, 1), 4)}` as keyof JSX.IntrinsicElements
          return <HeadingTag key={index}>{renderText(node.children ?? [])}</HeadingTag>
        }

        if (node.type === "quote") {
          return <blockquote key={index}>{renderText(node.children ?? [])}</blockquote>
        }

        if (node.type === "code") {
          return (
            <pre key={index}>
              <code>{renderText(node.children ?? [])}</code>
            </pre>
          )
        }

        if (node.type === "ul" || node.type === "ol") {
          return <div key={index}>{renderList(node)}</div>
        }

        if (node.type === "image" && node.url) {
          return (
            <div key={index} className="my-6">
              <img
                src={node.url}
                alt={node.alt || "Imagen"}
                className="rounded-lg shadow-md"
              />
            </div>
          )
        }

        if (node.type === "embed" && node.url) {
          return (
            <div key={index} className="my-8 aspect-video">
              <iframe
                src={node.url}
                title={node.title || "Contenido embebido"}
                width={node.width || 560}
                height={node.height || 315}
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-lg shadow-md"
              />
            </div>
          )
        }

        return <p key={index}>{renderText(node.children ?? [])}</p>
      })}
    </div>
  )
}
