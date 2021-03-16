import {PublicationList} from '../app/literature/literature.models';

export const MOCK_DATA: PublicationList = {
  category: 'category',
  show_limit: 1,
  publications: [
    {
      title: 'Site-specific mapping of the human SUMO proteome reveals co-modification with phosphorylation.',
      authors: 'Hendriks I.A., Lyon D., Young C., Jensen L.J., Vertegaal A.C. et al.',
      journal: 'Nat. Struct. Mol. Biol.',
      issue: '',
      pages: '325-336',
      year: 2017,
      citation_count: 1,
      pubmed_id: '28112733',
      doi: '',
      associated_pdbs: ['']
    },
    {
      title: 'Structural mechanism of the phosphorylation-dependent dimerization of the MDC1 forkhead-associated domain.',
      authors: 'Liu J, Luo S, Zhao H, Liao J, Li J et al.',
      journal: 'Nucleic Acids Res.',
      issue: '9',
      pages: '3898-912',
      year: 2012,
      citation_count: 5,
      pubmed_id: '22234877',
      doi: '10.1093/nar/gkr1296',
      associated_pdbs: ['3unn', '3umz', '3unm']
    }
  ]
};
