/*
These classes store publication information
 */

export class PublicationList {
  category: string; // Category of publication, e.g. "Reviews" or "Citations"
  show_limit: number; // Number of publications to be shown by default
  publications: Publication[];
}

export class Publication {
  title: string;
  authors: string;
  journal: string;
  issue: string;
  pages: string;
  year: number;
  pubmed_id: string;
  citation_count: number;
  doi: string;
  associated_pdbs: string[];
}
