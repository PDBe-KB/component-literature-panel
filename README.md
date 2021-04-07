PDBe-KB Literature Panel Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/component-literature-panel.svg?branch=main)](https://www.travis-ci.com/PDBe-KB/component-literature-panel)
[![codecov](https://codecov.io/gh/PDBe-KB/component-literature-panel/branch/main/graph/badge.svg?token=LE7P93G7A5)](https://codecov.io/gh/PDBe-KB/component-literature-panel)
[![Maintainability](https://api.codeclimate.com/v1/badges/3df9aa685e8b62072d28/maintainability)](https://codeclimate.com/github/PDBe-KB/component-literature-panel/maintainability)

This repository is for the codebase of a lightweight Angular v7 web component that provides information on literature, generally from PubMed/EuropePMC.

This component is used on the PDBe-KB Aggregated Views of Proteins to display publications related to all the PDB entries of a UniProt accession.

**Important:** This web component depends on the "csv-exporter" component which is available from [https://github.com/PDBe-KB/component-csv-exporter](https://github.com/PDBe-KB/component-csv-exporter)

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-literature-panel/main/pdbe-kb-literature-panel.png">

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-literature-panel.git
cd component-literature-panel
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Dependencies

This web component embeds another PDBe web component: [https://github.com/PDBe-KB/component-csv-exporter](https://github.com/PDBe-KB/component-csv-exporter)

In order to use all the features of this web component, retrieve the csv-exporter component and replace the contents of the `src/app/csv-exporter` folder with those files.

The main template (i.e. `index.html` by default) should also have the following CSS imports:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The component can be added to any Angular v7 apps.

#### 1.) Import the component:

Import the component in `app.module.ts` by default.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LiteratureComponent } from './literature/literature.component';
import { CsvExporterComponent } from './csv-exporter/csv-exporter.component';

@NgModule({
  declarations: [
    AppComponent,
    LiteratureComponent,
    CsvExporterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2.) Add the component to a template:
```angular2html
<app-literature [data]="publicationData" [accession]="accession"></app-literature>
```

The data model for the input data is described in 
`src/app/literature/literature.models.ts`

##### Example input data

```angular2html
{
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
    }
  ]
}
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-literature-panel/tags).

## Authors

* **Mihaly Varadi** - *Initial Implementation* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-literature-panel/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
