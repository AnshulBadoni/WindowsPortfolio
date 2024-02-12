// Image type

export interface Images {
  id: string;
  path: string;
  purity: string;
  thumbs : string;
  small : string;
  original : string;
}

export interface ProjectDetailProps {
  image: string;
  name: string;
  detail: string;
  tags : string;
  source_link : string;
  source_code_link : string;
}

export interface HighlighterProps {
  title : string;
  containerStyles?:string;
  backgroundColor ?: string;
}