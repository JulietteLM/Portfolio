import md from 'markdown-it-ts'
import metadata_block from 'markdown-it-metadata-block'
import yaml from 'yaml'

type FileData<T = Record<string, unknown>> = {id: string, html: string, metadata: T}

export function loadFilesData<T extends Record<string, unknown>>(modules: Record<string, string>, defaultMetadata: T = {} as T): Array<FileData<T>> {
  const meta: T = defaultMetadata;

  const markdown = md().use(metadata_block,{
    parseMetadata: yaml.parse,
    meta
  })

  const fileData: Array<FileData<T>> = []
  for (const [filePath, section] of Object.entries(modules)) {
    const html = markdown.render(section)
    const file = filePath.replace(' ', '-').split("/").pop() || "";
    const id = file.substring(0, file.lastIndexOf(".")) || file;

    fileData.push({
      id,
      html,
      metadata: { ...meta } as T
    })
  }

  return fileData
}
