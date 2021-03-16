PDBe-KB Literature Panel Component
=

This is the repository of a lightweight Angular 7 web component that provides information on literature, generally from PubMed/EuropePMC.

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

This web component embeds another PDBe web component: [https://github.com/PDBeurope/pdbe-autocomplete-search](https://github.com/PDBeurope/pdbe-autocomplete-search)

In order to use all the features of this web component, retrieve the search-autocomplete component and replace the contents of the "src/app/seach-autocomplete" folder with those files.

## Basic usage

The component can be added to any Angular7+ apps.

Import the component (e.g. in app.module.ts):
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SearchAutocompleteComponent } from './search-autocomplete/search-autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SearchAutocompleteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```

Adding the component to a template:
```angular2html
<app-literature [data]="publicationData" [accession]="accession"></app-literature>
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-literature-panel/tags).

## Authors

* **Mihaly Varadi** - *Migrating to GitHub* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-literature-panel/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
