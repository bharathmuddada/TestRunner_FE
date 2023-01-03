import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import * as customerApiDoc from './customerAPI-1.0.json';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger-ui',
  templateUrl: './swagger-ui.component.html',
  styleUrls: ['./swagger-ui.component.css'],
})
export class SwaggerUiComponent implements OnInit {
  ngOnInit(): void {
    const ui = new SwaggerUIBundle({
      dom_id: '#swagger-editor',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset,
      ],
      spec: JSON.parse(JSON.stringify(customerApiDoc)),
      docExpansion: 'none',
      operationsSorter: 'alpha',
    });
  }
}
