type ContentNode = {
    type: string
    children?: { text: string }[]
  }
  
  export function extractSummary(content: ContentNode[] = [], maxLength = 200): string {
    const paragraph = content.find((node) => node.type === "paragraph")
  
    if (!paragraph || !paragraph.children) return ""
  
    const text = paragraph.children.map((child) => child.text).join(" ").trim()
  
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text
  }
  