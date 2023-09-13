import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CForm, CFormTextarea } from "@coreui/react";
import React from "react";
import '../Utils/custom.scss';

export interface CallRecordsAccordion {
  isActive: 2
}


export function ToggleAccordion(props: CallRecordsAccordion) {

  return (
    <>

      <CAccordion activeItemKey={props.isActive}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Accordion Item #1</CAccordionHeader>
          <CAccordionBody className="accordion-border">
            <CForm>
            <CFormTextarea className="form-control" typeof="text" rows={3}
              style={{ height: '100px', border:'1px solid' }}>
            </CFormTextarea>
            </CForm>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>


      <p>Page works</p>
    </>
  );
}
