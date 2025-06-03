const criteria = [
    {
        "id": "P1.1.1",
        "criterion": "The Provider shall offer the ability to establish a legally binding act. This legally binding act shall be documented.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X Ontology, the declaration shall contain either a resolvable identifier pointing to the legally binding act offered by the Provider or a contact form to request more information.",
        "permissible_standards": [
            "SecNumCloud: 19.1",
            "BSI C5: BC-01, OIS-03",
            "CISPE (GDPR, Infrastructure & IaaS): 4.2",
            "EU Cloud CoC (GDPR, XaaS): 5.1.A, 5.1.B",
            "CSA CCM: STA-09",
            "SWIPO IaaS: FR1, FR2"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.1.2",
        "criterion": "The Provider shall have an option for each legally binding act to be governed by EU/EEA/Member State law.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X Ontology, the declaration shall contain the list of ISO 3166-2 codes indicating the EU/EEA/Member States whose law may be applied as governing law for the legally binding act.",
        "permissible_standards": [
            "SecNumCloud: 19.1.c",
            "CISPE (GDPR, Infrastructure & IaaS): 4.2",
            "EU Cloud CoC (GDPR, XaaS): 5.1.A, 5.1.B, 5.1.C, 5.1.F, 5.4.F"
        ],
        "example_standards": [
            "BSI C5: BC-01",
            "CSA CCM: STA-09",
            "SWIPO IaaS: FR1, FR2"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.1.3",
        "criterion": "The Provider shall clearly identify for which parties the legal act is binding.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "The declaration shall include at least one of the following:\n\n  1. Detailed description of the parties using the Gaia-X Ontology.\n  2. Use of legally relevant or legally binding cryptographic certificates from the Gaia-X Registry (note: this is not applicable in case of manual signature).\n",
        "permissible_standards": [
            "SecNumCloud: 19.1.b",
            "EU Cloud CoC (GDPR, XaaS): 5.1.C, 5.1.F, 5.1.H"
        ],
        "example_standards": [
            "BSI C5: BC-01, OIS-03",
            "CISPE (GDPR, Infrastructure & IaaS): 4.2",
            "CSA CCM STA-09",
            "SWIPO IaaS: FR1, FR2"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.1.4",
        "criterion": "The Provider shall ensure that the legally binding act covers the entire provision of the Service Offering.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Detailed description of the service, its components and dependencies using the Gaia-X Ontology.",
        "permissible_standards": [
            "SecNumCloud: 19.1, 19.4",
            "BSI C5: BC-01, BC-02, BC-04",
            "CISPE (GDPR, Infrastructure & IaaS): 4.2",
            "EU Cloud CoC (GDPR, XaaS): 5.1.C, 5.1.F, 5.1.H",
            "CSA CCM: STA-09"
        ],
        "example_standards": [
            "SWIPO IaaS: FR1, FR2"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.1.5",
        "criterion": "The Provider shall clearly identify in each legally binding act the applicable governing law.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X Ontology, the declaration shall detail the applicable governing laws for the legally binding act, by indicating the ISO 3166-2 code of the respective country.",
        "permissible_standards": [],
        "example_standards": [],
        "point_of_reference_standards": [
            "SecNumCloud 3.2.a – 19.1.c"
        ]
    },
    {
        "id": "P1.2.1",
        "criterion": "The Provider shall ensure there are specific provisions regarding service interruptions and business continuity (e.g., by means of a service level agreement), Provider's bankruptcy or any other reason by which the Provider may cease to exist in law.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X Ontology, evidences about the provisions covering the criterion shall be provided, either copied from the legally binding document or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  - the nature of the possible disruption ([ISO 22301](https://www.iso.org/standard/75106.html)) events identified and the impacts ([ISO 22301](https://www.iso.org/standard/75106.html));\n  - the conditions for the event to occur;\n  - the measures which will be implemented to resume normal operation;\n  - compensation terms;\n  - the mitigation process to reduce the risks associated with the interruption of the service.\n",
        "permissible_standards": [
            "SecNumCloud: 17.1, 17.2, 19.1.j",
            "BSI C5: BCM-02, BCM-03",
            "CISPE (GDPR, Infrastructure & IaaS): 5.5",
            "CSA CCM: BCR-01, BCR-02, BCR-03"
        ],
        "example_standards": [
            "EU Cloud CoC (GDPR, XaaS): 6.2.Q",
            "ISO/IEC 27001: A.5.30, A.8.21",
            "SWIPO IaaS: DP08",
            "TISAX: 17.1"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.2.2",
        "criterion": "The Provider shall ensure there are provisions governing the rights of the parties to use the service and any Customer Data therein.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X Ontology, evidences about the provisions covering the criterion shall be provided, either copied from the legally binding document or in a structured machine-readable format (DSL). The Provider shall indicate the relevant provisions within its agreement. These provisions should consider the following elements: \n\n  - how to rectify, erase, restrict, access or port Customer Data and related costs;\n  - means for the Customer to retrieve and delete Customer Data; \n  - terms under which the Provider can process Customer  Data, also with regard to sub-processors;\n  - termination of the contract/terms to make available data to the Customer and delete them after the termination of the contract;\n",
        "permissible_standards": [
            "SecNumCloud: 19.1.b, 19.1.d, 19.1.h, 19.1.k",
            "BSI C5: PI-02",
            "CISPE (GDPR, Infrastructure & IaaS): 4.7, 4.10, 5.7",
            "EU Cloud CoC (GDPR, XaaS): 5.1.F, 5.1.H, 5.7.A, 5.10.A, 5.10.B",
            "CSA CCM: IPY-01, IPY-04",
            "SWIPO IaaS: TR-04"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.2.3",
        "criterion": "The Provider shall ensure there are provisions governing changes, regardless of their kind.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X ontology, evidences about the provisions covering the criterion shall be provided, either copied from the legally binding document or in a structured machine-readable format (DSL).\nThe evidence shall detail:\n\n  - issuing of the GaiaXTermsAndCondition verifiable credential. The Participant signing Gaia-X Credentials agrees as follows: \"to update its Gaia-X Credentials about any changes, be it technical, organizational, or legal - especially but not limited to contractual in regard to the indicated attributes present in the Gaia-X Credentials.\".\n  - procedures for monitoring and managing changes to the information processing systems or on the technical and organizational security measures under the Provider’s responsibilities at the effective date of the legally binding agreement;\n  - procedures detailing how to communicate the following information to the Customer, in the event of operations carried out by the Provider and which may have an impact on the security or availability of the service: scheduled date and time of the start and end of operations, impacts on the security or availability of the service, contact within the provider;\n  - procedures to notify the Customer of any changes concerning an addition or a replacement of a subprocessor engaged by the Provider based on a general authorization by the Customer.\n  - criteria for risk assessment, categorisation and prioritisation of changes;\n  - procedures on how to inform the Customer about the type and scope of the change as well as the resulting obligations to cooperate in accordance with the contractual agreements;\n  - requirements for the documentation of changes in system, operational and user documentation;\n  - provisions limiting changes directly impacting Customer’s owned environments/tenants to explicitly authorized requests within service level agreements between the Provider and the Consumer.\n",
        "permissible_standards": [
            "SecNumCloud: 12.2, 14.2a, 15.4.a",
            "BSI C5: BC-01, OIS-03, DEV-03",
            "CISPE (GDPR, Infrastructure & IaaS): 4.3",
            "EU Cloud CoC (GDPR, XaaS): 5.3.F, 6.2.K",
            "CSA CCM: CCC-01, CCC-05"
        ],
        "example_standards": [
            "ISO/IEC 27001: A.8.32",
            "SWIPO IaaS: TR-04",
            "TISAX: 5.2.1"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.2.4",
        "criterion": "The Provider shall ensure there are provisions governing aspects regarding copyright or any other intellectual property rights.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL).",
        "permissible_standards": [
            "SecNumCloud: 7.2.c",
            "SWIPO IaaS: SCR02",
            "CISPE (GDPR, Infrastructure & IaaS): 4.8",
            "EU Cloud CoC (GDPR, XaaS): 5.1.F, 5.2.D, 5.12.A, 5.12.B, 5.12.C, 5.12.D, 5.12.F"
        ],
        "example_standards": [
            "BSI C5: HR-06",
            "CSA CCM: HRS-08, HRS-10",
            "ISO/IEC 27001: A.6.2, A.6.3, A.6.5",
            "TISAX: 8.2.1, 8.2.2, 8.2.3"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.2.5",
        "criterion": "The Provider shall declare the general location of any processing of Customer Data, allowing the Customer to determine the applicable jurisdiction and to comply with Customer's requirements in the context of its business and operational context.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "The declaration shall include the following details:\n\n  1. resources and dependencies of the Service Offering, using the Gaia-X Ontology.\n  2. country and administrative area of physical resources.\n  3. management access location\n",
        "permissible_standards": [
            "CISPE (GDPR, Infrastructure & IaaS): 4.4",
            "CSA CCM: DSP-19"
        ],
        "example_standards": [
            "SecNumCloud: 19.1.b, 19.2.a",
            "BSI C5: BC-01",
            "EU Cloud CoC (GDPR, XaaS): 5.3.E, 5.3.G, 5.4.B"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.2.6",
        "criterion": "The Provider shall explain how information about subcontractors and related Customer Data localization will be communicated.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  - procedures and mechanisms to inform the Customer about the list of all subcontractors involved in the implementation of the Service and related locations where the Customer data is processed, stored and backed up.\n",
        "permissible_standards": [
            "SecNumCloud: 15.1, 15.2, 19.1.b, 19.2.a",
            "BSI C5: 3.4.4.1, BC-01",
            "CISPE (GDPR, Infrastructure & IaaS): 4.5",
            "EU Cloud CoC (GDPR, XaaS): 5.3.C, 5.3.E, 5.3.F, 5.3.G",
            "CSA CCM: DSP-19, STA-03, STA-09"
        ],
        "example_standards": [
            "ISO/IEC 27001: A.5.19, A.5.20",
            "TISAX: 6.1.1"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.2.7",
        "criterion": "The Provider shall communicate to the Customer where the applicable jurisdiction(s) of subcontractors will be.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  - Contractual terms to inform the Customer, including notification of any changes, about the jurisdiction(s) of subcontractors applicable to the processing of Customer Data, by providing information on the general location of subcontractors (such as a country or regional area).\n",
        "permissible_standards": [
            "CISPE (GDPR, Infrastructure & IaaS): 4.5",
            "EU Cloud CoC (GDPR, XaaS): 5.3.A, 5.3.E, 5.3.F, 5.3.G"
        ],
        "example_standards": [
            "SecNumCloud: 15.1, 15.2, 19.1.b, 19.2.a",
            "BSI C5: 3.4.4.1, BC-01",
            "CSA CCM: DSP-19, STA-03, STA-09",
            "ISO/IEC 27001: A.5.19, A.5.20",
            "TISAX: 6.1.1"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.2.8",
        "criterion": "The Provider shall include in the contract the contact details where Customer may address any queries regarding the Service Offering and the contract.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X Ontology, evidences covering the criterion shall be provided, either copied from the legally binding document or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  - Communications channels or standardised interactive interfaces or Customer Portals available to the Customer to enable cooperation between the Provider and the Customer;\n  - Contact details available to the Customer to assist him in fulfilling data subject rights requests, including data subject access requests;\n  - Contact details to enable individual support to the Customer for any questions or requests it may have regarding the data protection measures covered by the Service Agreement;\n  - Contact data of the Data Protection Officer (as required under the GDPR) or Data Protection Point of Contact.\n",
        "permissible_standards": [
            "EU Cloud CoC (GDPR, XaaS): 5.7, 5.9.A, 5.9.B"
        ],
        "example_standards": [
            "SecNumCloud: 19.1.b",
            "BSI C5: BC-02, OIS-03",
            "CISPE (GDPR, Infrastructure & IaaS): 4.3, 4.6"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.2.9",
        "criterion": "The Provider shall declare the mandatory service and resource attributes in the self-description of each Service Offering.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "The Service Offering credential shall contain the mandatory attributes for services and resources, as they are defined in this document.",
        "permissible_standards": [],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.3.1",
        "criterion": "The Provider shall describe the Permissions, Requirements and Constraints of the Service Offering using a common Domain-Specific Language (DSL) in the self-description.",
        "standard_compliance": "N/A",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "for Service Offerings and resources, the declaration shall include information on the policies describing Permissions, Requirements and Constraints using a common Domain-Specific Language (DSL).",
        "permissible_standards": [],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.3.2",
        "criterion": "The Provider shall ensure that the Service Offering is operated by a Gaia-X participant defined by a verified credential.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include the following elements:\n\n  - Unique registered business identifier identifying the Service Offering Provider. For this purpose, legally relevant or legally binding cryptographic certificates from the Gaia-X Registry shall be used.\n  - Physical location of the headquarters in ISO 3166-2 format.\n  - Physical location of legal registration in ISO 3166-2 format.",
        "permissible_standards": [],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.3.3",
        "criterion": "Not in use",
        "standard_compliance": "N/A",
        "labelL1": "N/A",
        "labelL2": "N/A",
        "labelL3": "N/A",
        "declaration": "N/A",
        "permissible_standards": [],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.3.4",
        "criterion": "Not in use",
        "standard_compliance": "N/A",
        "labelL1": "N/A",
        "labelL2": "N/A",
        "labelL3": "N/A",
        "declaration": "N/A",
        "permissible_standards": [],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P1.3.5",
        "criterion": "Not in use",
        "standard_compliance": "N/A",
        "labelL1": "N/A",
        "labelL2": "N/A",
        "labelL3": "N/A",
        "declaration": "N/A",
        "permissible_standards": [],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P2.1.1",
        "criterion": "The Provider shall offer the ability to establish a contract under Union or EU/EEA/Member State law and specifically addressing GDPR requirements.",
        "standard_compliance": "N/A",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "The declaration shall include:\n\n  1. The list of ISO 3166-2 codes indicating the EU/EEA/Member States whose law may be applied as governing law for the legally binding act.\n  2. Evidences about the provisions covering the criterion, either by providing a resolvable identifier pointing to the Service agreement offered by the Provider addressing the relevant provision or in a structured machine-readable format (DSL).\n",
        "permissible_standards": [
            "SecNumCloud: 18.1.a, 19.1",
            "CISPE (GDPR, Infrastructure & IaaS): 4.2",
            "EU Cloud CoC (GDPR, XaaS): 5.1.A, 5.1.C",
            "In cases of a Code of Conduct (Art. 40 GDPR): assessment by an accredited monitoring body for the respective Code of Conduct, Art. 41 GDPR. Assessment process as defined by the respective Code of Conduct / accredited monitoring body.",
            "In case of a Certification (Art. 42 GDPR): assessment by an accredited Certification Body for the respective Certification (Art. 43 GDPR). Assessment process as defined by the respective Certification / accredited certification body."
        ],
        "example_standards": [
            "SecNumCloud: 18.1.a, 19.1(*)"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P2.1.2",
        "criterion": "The Provider shall define the roles and responsibilities of each party.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X ontology, evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL), shall be provided. The evidence shall detail:\n\n  - roles and related responsibilities of the Provider and the Customer for the protection of personal data;\n  - responsibilities of the Provider and the Customer with respect to security measures.\n",
        "permissible_standards": [
            "SecNumCloud: 6.1.e, 19.1",
            "CISPE (GDPR, Infrastructure & IaaS): 4.3, 5.1",
            "EU Cloud CoC (GDPR, XaaS): 5.1.C",
            "In case of a Code of Conduct (Art. 40 GDPR): assessment by an accredited monitoring body for the respective Code of Conduct, Art. 41 GDPR. Assessment process as defined by the respective Code of Conduct / accredited monitoring body.",
            "In case of a Certification (Art. 42 GDPR): assessment by an accredited Certification Body for the respective Certification (Art. 43 GDPR). Assessment process as defined by the respective Certification / accredited certification body."
        ],
        "example_standards": [
            "SecNumCloud: 6.1.e, 19.1 (*)"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P2.1.3",
        "criterion": "The Provider shall clearly define the technical and organizational measures in accordance with the roles and responsibilities of the parties, including an adequate level of detail.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from the legally binding document/other legally relevant documents or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  - a reference to the documentation of the Provider detailing its implemented technical and organisation measures. Such measures should refer to elements such as:\n\n   - available documentation and mechanisms to implement a Security Management System, including an internal security organisation;\n   - documentation regarding a risk assessment covering the scope of the Service;\n   - technical and organizational measures to ensure a level of security appropriate to the risk; \n   - technical and organisational measures implemented and maintained for the Provider’s data center facilities, servers, networking equipment and host software systems that are within the Provider’s control and are used to provide the Service;\n   - provisions to ensure transparency between the Provider and the Customer regarding their security responsibilities.\n",
        "permissible_standards": [
            "SecNumCloud: 5 to 17",
            "BSI C5: All Basic Criteria",
            "CISPE (GDPR, Infrastructure & IaaS): 4.3",
            "EU Cloud CoC (GDPR, XaaS): Entire Section 6",
            "In cases of a Code of Conduct (Art. 40 GDPR): assessment by an accredited monitoring body for the respective Code of Conduct, Art. 41 GDPR. Assessment process as defined by the respective Code of Conduct / accredited monitoring body.",
            "In case of a Certification (Art. 42 GDPR): assessment by an accredited Certification Body for the respective Certification (Art. 43 GDPR). Assessment process as defined by the respective Certification / accredited certification body."
        ],
        "example_standards": [
            "SecNumCloud: 5 to 17 (*)",
            "BSI C5: All Basic Criteria (*)",
            "CSA CCM: All controls except Domain 'Universal Endpoint Management' (*)",
            "ISO/IEC 27001: Entire Annex A (*)",
            "TISAX: All Information Security Requirements (*)"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P2.2.1",
        "criterion": "The Provider shall be ultimately bound to instructions of the Customer.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL), shall be provided.\nThe evidence shall detail:\n\n   - The terms under which the Provider shall process Customer Personal Data on behalf of the Customer;\n   - The scope of Customer's Instructions for the processing of Customer Personal Data;\n   - The parameters of the Service Offering description within which the Customer can give instructions to the Provider in relation to the processing of personal data.\n",
        "permissible_standards": [
            "CISPE (GDPR, Infrastructure & IaaS): 4.1",
            "EU Cloud CoC (GDPR, XaaS): 5.1.F, 5.2.D",
            "In cases of a Code of Conduct (Art. 40 GDPR): assessment by an accredited monitoring body for the respective Code of Conduct, Art. 41 GDPR. Assessment process as defined by the respective Code of Conduct / accredited monitoring body.",
            "In case of a Certification (Art. 42 GDPR): assessment by an accredited Certification Body for the respective Certification (Art. 43 GDPR). Assessment process as defined by the respective Certification / accredited certification body."
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P2.2.2",
        "criterion": "The Provider shall clearly define how Customer may instruct, including by electronic means such as configuration tools or APIs.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X ontology, evidences about the provisions covering the criterion, either copied from the legally binding document or additional manuals or in a structured machine-readable format (DSL), shall be provided. The evidence shall detail:\n\n   - format of acceptable Instructions from the Customer to the CSP;\n   - confirmation of Customer interactions and verification;\n   - records of completion and actions taken.\n",
        "permissible_standards": [
            "CISPE (GDPR, Infrastructure & IaaS): 4.2",
            "EU Cloud CoC (GDPR, XaaS): 5.2.A, 5.2.B, 5.2.C",
            "In cases of a Code of Conduct (Art. 40 GDPR): assessment by accredited monitoring body for the respective Code of Conduct, Art. 41 GDPR. Assessment process as defined by the respective Code of Conduct / accredited monitoring body.",
            "In case of a Certification (Art. 42 GDPR): assessment by an accredited Certification Body for the respective Certification (Art. 43 GDPR). Assessment process as defined by the respective Certification / accredited certification body."
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P2.2.3",
        "criterion": "The Provider shall clearly define if and to which extent third country transfer will take place.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "N/A",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL).",
        "permissible_standards": [
            "CISPE (GDPR, Infrastructure & IaaS): 4.4",
            "EU Cloud CoC (GDPR, XaaS): 5.4.A, 5.4.C, 5.4.E",
            "In cases of a Code of Conduct (Art. 40 GDPR): assessment by an accredited monitoring body for the respective Code of Conduct, Art. 41 GDPR. Assessment process as defined by the respective Code of Conduct / accredited monitoring body.",
            "In case of a Certification (Art. 42 GDPR): assessment by an accredited Certification Body for the respective Certification (Art. 43 GDPR). Assessment process as defined by the respective Certification / accredited certification body."
        ],
        "example_standards": [
            "CSA CCM: DSP-10, DSP-19 (*)",
            "SecNumCloud: 5.3.e, 19.1.e",
            "BSI C5: BC-01",
            "ISO/IEC 27001: A.5.34"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P2.2.4",
        "criterion": "The Provider shall clearly define if and to the extent third country transfers will take place, and by which means of Chapter V GDPR these transfers will be protected.",
        "standard_compliance": "N/A",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "N/A",
        "declaration": "Using the Gaia-X Ontology, evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL), shall be provided. The evidence shall detail:\n\n   - information regarding the country/countries where the data is stored and processed by or on behalf of the Provider;\n   - specific safeguards under Chapter V GDPR that the Provider plans to apply in case of third-country transfers and procedures to ensure that no transfer of Customer Personal Data takes place without appropriate safeguards in place;\n",
        "permissible_standards": [
            "CISPE (GDPR, Infrastructure & IaaS): 4.4",
            "EU Cloud CoC (GDPR, XaaS): 5.4.A, 5.4.C, 5.4.E",
            "In cases of a Code of Conduct (Art. 40 GDPR): assessment by an accredited monitoring body for the respective Code of Conduct, Art. 41 GDPR. Assessment process as defined by the respective Code of Conduct / accredited monitoring body.",
            "In case of a Certification (Art. 42 GDPR): accredited Certification Body for the respective Certification (Art. 43 GDPR). Assessment process as defined by the respective Certification / accredited certification body."
        ],
        "example_standards": [
            "CSA CCM: DSP-10, DSP-19 (*)",
            "SecNumCloud: 5.3.e, 19.1.e",
            "BSI C5: BC-01",
            "ISO/IEC 27001: A.5.34"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P2.2.5",
        "criterion": "The Provider shall clearly define if and to which extent sub-processors will be involved.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL), shall be provided. The evidence shall detail:\n\n  - Procedures and mechanisms in place to keep up-to-date and communicate to the Customer the list of existing sub-processors involved in the implementation of the service, including the information on the related jurisdictions applicable to the processing of Customer Personal Data and details about the specific contribution of sub-processors to the provision of the service and processing of personal/customer data.\n",
        "permissible_standards": [
            "SecNumCloud: 15.1",
            "CISPE (GDPR, Infrastructure & IaaS): 4.5",
            "EU Cloud CoC (GDPR, XaaS): 5.3.E, 5.3.F, 5.3.G",
            "In cases of a Code of Conduct (Art. 40 GDPR): assessment by an accredited monitoring body for the respective Code of Conduct, Art. 41 GDPR. Assessment process as defined by the respective Code of Conduct / accredited monitoring body.",
            "In case of a Certification (Art. 42 GDPR): accredited Certification Body for the respective Certification (Art. 43 GDPR). assessment process as defined by the respective Certification/accredited certification body."
        ],
        "example_standards": [
            "CSA CCM: DSP-13 (*)",
            "TISAX: 9.2 (*)",
            "BSI C5: 3.4.4.1, BC-01",
            "ISO/IEC 27001: A.5.19"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P2.2.6",
        "criterion": "The Provider shall clearly define if and to the extent sub-processors will be involved, and the measures that are in place regarding sub-processors management.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, copied from the legally binding document or other legally relevant documents or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  - procedures and mechanisms in place to maintain and communicate to the Customer the list of sub-processors involved in the implementation of the service, including the information on the related jurisdictions applicable to the processing of Customer Personal Data and details about their specific contribution to the provision of the service and processing of personal/customer data;\n  - measures to impose on sub-processors the same or a higher level of data protection than the level ensured by the Provider;\n  - procedures to regularly monitor the security measures and changes implemented by the sub-processors.\n",
        "permissible_standards": [
            "SecNumCloud: 15.2, 15.3, 15.4, 15.5",
            "CISPE (GDPR, Infrastructure & IaaS): 4.5",
            "EU Cloud CoC (GDPR, XaaS): 5.3.C, 5.3.D",
            "In case of a Code of Conduct (Art. 40 GDPR): Accredited monitoring body for the respective Code of Conduct, Art. 41 GDPR. Assessment process as defined by the respective Code of Conduct / accredited monitoring body.",
            "In case of a Certification (Art. 43 GDPR): Accredited Certification Body for the respective Certification (Art. 43 GDPR). Assessment process as defined by the respective Certification/accredited certification body."
        ],
        "example_standards": [
            "SecNumCloud: 15.2, 15.3, 15.4, 15.5 (*)",
            "CSA CCM: DSP-13, DSP-14, DSP-17, STA-01, STA-09, STA-12, STA-13, STA-14",
            "BSI C5: 3.4.4.1, SSO-01, SSO-02, SSO-03, SSO-04, SSO-05",
            "ISO/IEC 27001: A.5.19, A.5.20, A.5.34",
            "TISAX: 6.1.1"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P2.2.7",
        "criterion": "The Provider shall define the audit rights for the Customer.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL). The evidence shall detail the procedures regarding the audits that the Customer may request to verify the adequacy of the security and data protection controls that apply to the Service Offering, by addressing the following topics:\n\n  - how the Provider will contribute to such activity;\n  - what auditors can be selected by the Customer;\n  - controls determined by the Provider to avoid risks for other customers/interruption of business operations;\n  - terms to be accepted by the Customer to protect Provider’s confidential information;\n  - obligations related to the payment of the audit activity. \n",
        "permissible_standards": [
            "SecNumCloud: 19.1.q",
            "CISPE (GDPR, Infrastructure & IaaS): 4.6",
            "EU Cloud CoC (GDPR, XaaS): 5.5.C, 5.5.D, 5.5.F",
            "In case of a Code of Conduct (Art. 40 GDPR): Accredited monitoring body for the respective Code of Conduct, Art. 41 GDPR. Assessment process as defined by the respective Code of Conduct / accredited monitoring body.",
            "In case of a Certification (Art. 43 GDPR): Accredited Certification Body for the respective Certification (Art. 43 GDPR). Assessment process as defined by the respective Certification/accredited certification body."
        ],
        "example_standards": [
            "SecNumCloud: 19.1.q (*)",
            "BSI C5: COM-02"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.1",
        "criterion": "Organization of information security: Plan, implement, maintain and continuously improve the information security framework within the organisation.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidence about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  -   availability of a service information security policy, approved by the Provider‘s management;\n  -   procedures to perform a risk assessment covering the entire scope of the service.\n",
        "permissible_standards": [
            "SecNumCloud: 5.2.a, 5.2.b, 5.2.c, 5.2.d, 5.2.e, 5.3.a",
            "BSI C5: OIS-01, OIS-02, COM-04",
            "EU Cloud CoC (GDPR, XaaS): 6.1.C",
            "CSA CCM: GRC-01, GRC-03, GRC-05, GRC-06",
            "ISO/IEC 27001: Annex A 5.1, Annex A 5.2, Annex 5.4",
            "TISAX: 1.2.1, 1.2.2, 1.5.2"
        ],
        "example_standards": [
            "CISPE (GDPR, Infrastructure & IaaS):  4.3",
            "CSA CCM: GRC-01, GRC-03, GRC-05, GRC-06",
            "ISO/IEC 27001: Annex A 5.1, Annex A 5.2, Annex 5.4",
            "TISAX: 1.2.1, 1.2.2, 1.5.2"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.2",
        "criterion": "Information Security Policies: Provide a global information security policy, derived into policies and procedures regarding security requirements and to support business requirements",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidence about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL). \nThe evidence shall detail:\n\n  -   availability of a global information security policy;\n  -   availability of policies and instructions derived from the information security policy ;\n  -   procedures to perform at least annually a review of information security policies and instructions.\n",
        "permissible_standards": [
            "SecNumCloud: 5.2",
            "BSI C5: SP-01, SP-02, OIS-02",
            "CISPE (GDPR, Infrastructure & IaaS):  4.3",
            "EU Cloud CoC (GDPR, XaaS): 6.2.A",
            "ISO/IEC 27001: Annex A 5.1"
        ],
        "example_standards": [
            "CSA CCM: GRC-01, GRC-03, GRC-05",
            "TISAX: 1.4.1"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.3",
        "criterion": "Risk Management: Ensure that risks related to information security are properly identified, assessed, and treated, and that the residual risk is acceptable to the CSP.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidence about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL). The evidence shall detail :\n\n  -   availability of policies and instructions for risk management procedures\n  -   procedure to review at least annually the risk assessment;\n  -   acceptance by the management of the Provider of the residual risks identified in the risk assessment;\n",
        "permissible_standards": [
            "SecNumCloud: 5.3.G, 5.3.H",
            "BSI C5: OIS-06, OIS-07",
            "CISPE (GDPR, Infrastructure & IaaS): 5.4",
            "EU Cloud CoC (GDPR, XaaS): 6.1.C",
            "CSA CCM: GRC-02",
            "ISO/IEC 27001: 6.1.2, 6.1.3, 8.2"
        ],
        "example_standards": [
            "TISAX: 1.4.1"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.4",
        "criterion": "Human Resources: Ensure that employees understand their responsibilities, are aware of their responsibilities with regard to information security, and that the organisation's assets are protected in the event of changes in responsibilities or termination.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from Provider’s documentation or in a structured machine-readable format (DSL). \nThe evidence shall detail :\n\n  -   employment Terms&Conditions requiring compliance with applicable policies and instruction related to information security \n  -   procedures to inform internal and external employees about which responsibilities will remain in place when their employment is terminated or changed and for how long;\n  -   provisions to ensure and document that internal and external employees are committed to the policies and instructions for acceptable use and safe handling of assets and that assets handed over are returned upon termination of employment;\n  -   policies for managing user accounts and access rights for internal and external employees;\n  -   procedures to ensure that access rights are promptly revoked if the job responsibilities of the Provider’s internal or external staff change. \n",
        "permissible_standards": [
            "BSI C5: HR-02, HR_03, HR-04, HR-05, HR-06, AM-05, IDM-01, IDM-04",
            "EU Cloud CoC (GDPR, XaaS): 6.2.C",
            "SecNumCloud: 7.2, 7.3, 7.4, 7.5",
            "CISPE (GDPR, Infrastructure & IaaS):  4.3",
            "ISO/IEC 27001: Annex A 5.2, Annex A 5.11, Annex A 6.2, Annex A 6.3, Annex A 6.6"
        ],
        "example_standards": [
            "CSA CCM: HRS-02, HRS-03, HRS-04, HRS-06, HRS-07, HRS-08, HRS-09, HRS-10, HRS-11, HRS-13",
            "TISAX: 2.1.1, 2.1.2"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.5",
        "criterion": "Asset Management: Identify the organisation's own assets and ensure an appropriate level of protection throughout their lifecycle.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidence about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL). \nThe evidence shall detail :\n\n  -   Procedures for inventorying assets, where in the inventory for each software the information on its version and the equipment on which the software is installed is provided;\n  -   procedures to ensure that software licenses are valid throughout the provision of the service ;\n  -   policies and instructions for acceptable use, safe handling and return of assets;\n  -   processes for hardware commissioning and decommissioning.\n",
        "permissible_standards": [
            "SecNumCloud: 8.1, 8.2, 8.3, 8.4, 8.5, 11.8",
            "BSI C5: AM-01, AM-02, AM-03, AM-04, AM-05, AM-06",
            "EU Cloud CoC (GDPR, XaaS): 6.2.D, 6.2.E",
            "CSA CCM: DCS-01, DCS-02, DCS-04, DCS-05, DCS-06, CCC-01, CCC-04, CCC-06, HRS-05, CEK-04",
            "ISO/IEC 27001: Annex A 5.9, Annex A 5.12, Annex A 5.15, Annex A 8.3",
            "TISAX:1.3.1, 1.3.2"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.6",
        "criterion": "Physical Security: Prevent unauthorised physical access and protect against theft, damage, loss and outage of operations.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from Provider’s documentation or in a structured machine-readable format (DSL). \nThe evidence shall detail:\n\n  -   security perimeters implemented, with a distinction between different zones and related means of limitation and access control according to the profiles of the stakeholders;\n  -   measures to keep a record of the identity of the visitors;\n  -   measures to prevent and limit the risk of fire departure and spread, water damage, power supply outage and air conditioning failures;\n  -   measures to protect electrical and telecommunications wiring from physical damage and interception;\n  -   means to provide operational redundancy;\n  -   structural, technical and organisational measures to protect the premises and buildings used for the provision of the service.\n",
        "permissible_standards": [
            "SecNumCloud: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.10",
            "BSI C5: PS-01, PS-02, PS-03, PS-05, OS-07, PS-07",
            "CISPE (GDPR, Infrastructure & IaaS): 4.3",
            "EU Cloud CoC (GDPR, XaaS): 6.2.J",
            "CSA CCM: DCS-07, DCS-09, DCS-10, DCS-12, DCS-13, DCS-14, DCS-15, LOG-12",
            "ISO/IEC 27001: Annex A 7.1, Annex A 7.2, Annex A 7.3, Annex A 7.4, Annex A 7.5, Annex A 7.6, Annex A 7.7, Annex A 7.8, Annex A 7.9, Annex A 7.10, Annex A 711, Annex A 7.12, Annex A 7.13, Annex A 7.14"
        ],
        "example_standards": [
            "TISAX: 3.1.1"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.7",
        "criterion": "Operational Security: Ensure proper and regular operation, including appropriate measures for planning and monitoring capacity, protection against malware, logging and monitoring events, and dealing with vulnerabilities, malfunctions and failures.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidence about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL).  The evidence shall detail :\n\n  -   procedures and technical and organisational safeguards for the monitoring and provisioning and de-provisioning of cloud services;\n  -   policies and instructions with specifications for protection against malware, detailing system-specific protection mechanisms;\n  -   policies and instructions that govern the logging and monitoring of events on system components within the area of responsibility of the Provider and related implementation procedures;\n  -   guidelines and instructions with technical and organisational measures to ensure the timely identification and addressing of vulnerabilities in the system components used to provide the service;\n  -   procedure for controlling the installation of software on the equipment of the service information system.\n",
        "permissible_standards": [
            "BSI C5: OPS-01, OPS-02, OPS-03, OPS-04,OPS-05, OPS-10, OPS-11, OPS-12, OPS-13, OPS-14, OPS-15, OPS-16, OPS-17, OPS-18, OPS-19, OPS-20, OPS-22, OPS-23",
            "EU Cloud CoC (GDPR, XaaS): 6.2.K",
            "CSA CCM: IVS-02, IVS-03, IVS-09, LOG-01, LOG-03, LOG-05, LOG-07, LOG-08, LOG-13, SEF-01, SEF-02, SEF-05, SEF-07, TVM-01, TVM-02, TVM-07, UEM-09, UEM-10",
            "ISO/IEC 27001: Annex A 8.6, Annex A 8.7, Annex A 8.8, Annex 8.9, Annex A 8.15, Annex A 8.16",
            "SecNumCloud: 6.1.a, 12.1, 12.4, 12.6, 12.7, 12.9, 12.10, 12.11, 16.1, 16.3.a, 17.4.a",
            "CISPE (GDPR, Infrastructure & IaaS):  4.3"
        ],
        "example_standards": [
            "TISAX: 5.2.3, 5.2.4, 5.2.5"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.8",
        "criterion": "Identity, Authentication and access control management: Limit access to information and information processing facilities.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidence about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  -   access control policies and measures, restricting physical access to information processing facilities and technical access to host software and networks to authorised personnel;\n  -   mechanisms for monitoring and detecting unauthorised access to sensitive areas;\n  -   procedures to ensure the allocation, modification, review and removal of access rights to resources from the service’s information system;\n  -   mechanisms to implement silos between the customers;\n  -   partitioning measures between the service’s information system and  other information systems of the Provider.\n",
        "permissible_standards": [
            "SecNumCloud: 9.1, 9.2, 93. 9.4, 9.7, 11.2",
            "BSI C5: PS-05, IDM-01, IDM-02, IDM-03, IDM-04, IDM-05, IDM-06, IDM-07",
            "CISPE (GDPR, Infrastructure & IaaS):  4.8",
            "EU Cloud CoC (GDPR, XaaS): 6.2.F",
            "CSA CCM: DCS-07, DCS-09, IAM-01, IAM-04, IAM-05, IAM-06, IAM-07, IAM-08, IAM-09, IAM-10, IAM-11",
            "ISO/IEC 27001: Annex A 5.15, Annex A 5.16, Annex A 5.17, Annex A 5.18, Annex A 8.2, Annex A 8.3"
        ],
        "example_standards": [
            "TISAX: 4.1.1, 4.1.2, 4.1.3, 4.2.1"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.9",
        "criterion": "Cryptography and Key management: Ensure appropriate and effective use of cryptography to protect the confidentiality, authenticity or integrity of information.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, declaration of adherence to the following standards:\n\n  - use [FIPS 186-5](https://csrc.nist.gov/pubs/fips/186-5/final) and [FIPS 180-4](https://csrc.nist.gov/pubs/fips/180-4/upd1/final) for curves and hash methods\n  - use [RFC9142](https://datatracker.ietf.org/doc/html/rfc9142) or updates for SSH\n  - use [RFC5406](https://datatracker.ietf.org/doc/html/rfc5406) or updates for IPSec\n  - use [RFC7296](https://datatracker.ietf.org/doc/html/rfc7296) or updates for IKEv2\n  - use [RFC8446](https://datatracker.ietf.org/doc/html/rfc8446) or updates for TLS\n  - use [RFC7515](https://datatracker.ietf.org/doc/html/rfc7515) or updated for JOSE\n\nwhen storing or transferring information afferent to user information and data submitted or generated by the user when using the services.\n",
        "permissible_standards": [
            "SecNumCloud: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6",
            "BSI C5: CRY-01, CRY-02, CRY-03, CRY-04",
            "EU Cloud CoC (GDPR, XaaS): 6.2.G, 6.2.Hm 6.2.I",
            "CSA CCM: CEK-01, CEK-02, CEK-03, CEK-04, CEK-05, CEK-06, CEK-07, CEK-08, CEK-09, CEK-10, CEK-11, CEK-12, CEK-13, CEK-14, CEK-15, CEK-16, CEK-17, CEK-18, * CEK-19, CEK-20, CEK-21",
            "ISO/IEC 27001: Annex A 8.24"
        ],
        "example_standards": [
            "TISAX: 5.1.1, 5.1.2"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.10",
        "criterion": "Communication Security: Ensure the protection of information in networks and the corresponding information processing systems.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X ontology, describe in the order of priority:\n\n  1. List of IXPs or Transit Providers, or Available Points of Presence (PoPs):\n  2. List of Datacenters Hosting Infrastructure Services:\n  3. List of Hardware Equipment Geographic Locations (On-Premises Server Location):\n",
        "permissible_standards": [
            "SecNumCloud: 13.1, 13.2, 13.3",
            "BSI C5: COS-01, COS-02, COS-03, COS-04, COS-05, COS-06, COS-07, COS-08",
            "EU Cloud CoC (GDPR, XaaS): 6.2.L",
            "CSA CCM: IPY-01, IPY-03, IVS-03, IVS-07",
            "ISO/IEC 27001: Annex A 8.9, Annex A 8.12, Annex A 8.20, Annex A 8.21, Annex A 8.22",
            "CISPE (GDPR, Infrastructure & IaaS):  4.3"
        ],
        "example_standards": [
            "TISAX: 5.1.2, 5.2.7"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.11",
        "criterion": "Portability and Interoperability: The CSP shall provide a means by which a customer can obtain their stored customer data, and provide documentation on how (where appropriate, through documented API’s) the CSC can obtain the stored data at the end of the contractual relationship and shall document how the data will be securely deleted from the Cloud Service Provider in what timeframe.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidence about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL).  The evidence shall detail :\n\n  -   list of methods to export data from the user’s account out of the service,\n  -   available protections and known restrictions and technical limitations related to available porting methods and formats;\n  -   information on the means to request data retrieval;\n  -   information on the period during which the Customer is entitled to transfer their data once the contractual relationship is terminated.\n",
        "permissible_standards": [
            "BSI C5: PI-01, PI_02, PI-03",
            "EU Cloud CoC (GDPR, XaaS): 5.2.A, 5.2.B, 5.2.C, 5.7.A, 5.7.B, 5.10.A, 5.10.B, 5.14.A, 5.14.B",
            "CSA CCM: IPY-01, IPY-02, IPY-03, IPY-04",
            "SWIPO IaaS: PR01, PR02, PR03, PR06, PR07, DP01, DP02, DP03, DP05, DP06, DP07, DP08, SCR01, TR02, PLR05",
            "SecNumCloud: 19.1, 19.4",
            "CISPE (GDPR, Infrastructure & IaaS):  4.7, 4.10, 5.7"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.12",
        "criterion": "Change and Configuration Management: Ensure that changes and configuration actions to information systems guarantee the security of the delivered cloud service.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from Provider’s documentation or in a structured machine-readable format (DSL). The evidence shall detail:\n  -   policies and instructions including technical and organisational safeguards for change management of system components of the service;\n  -   procedures to submit changes to a risk assessment with regard to potential effects on the system components concerned;\n  -   mechanisms to ensure logging of changes;\n  -   procedures to submit changes to appropriate testing during software development and deployment;\n  -   provisions limiting changes directly impacting Customer’s owned environments/tenants;\n  -   procedures for version control to track dependencies of changes and to restore affected system components.\n",
        "permissible_standards": [
            "BSI C5: DEV-03, DEV-05, DEV-06, DEV-07, DEV-08, DEV-09",
            "EU Cloud CoC (GDPR, XaaS): 6.2.M",
            "CSA CCM: CCC-01, CCC-02, CCC-04, CCC-05, CCC-06, CCC-07, CCC-09",
            "ISO/IEC 27001: Annex A 8.9, Annex 8.32",
            "SecNumCloud: 12.2, 14.1, 14.2, 14.3, 14.4, 14.6",
            "TISAX: 5.2.1, 5.2.2"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.13",
        "criterion": "Development of Information systems: Ensure information security in the development cycle of information systems.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidence about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  -   rules for the the secure development of software and systems, to be applied to internal developments;\n  -   procedure for supervising and controlling outsourced software and system development activity;\n  -   procedure to maintain the history of the software and systems versions implemented;\n  -   procedures to test all applications before they are put into production;\n  -   mechanisms to implement a secure development environment.\n",
        "permissible_standards": [
            "SecNumCloud: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7",
            "BSI C5: DEV-01, DEV-02, DEV-03, DEV-04, DEV-05, DEV-06, DEV-07, DEV-08, DEV-09",
            "EU Cloud CoC (GDPR, XaaS): 6.2.M",
            "CSA CCM: DSP-, DSP-08, AIS-04, AIS-05, AIS-06",
            "ISO/IEC 27001: Annex A 8.25, Annex 8.26, Annex A 8.27, Annex A 8.28, Annex A 8.29, Annex A 8.30, Annex A 8.31",
            "TISAX: 5.3.1"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.14",
        "criterion": "Procurement Management: Ensure the protection of information that suppliers of the CSP can access and monitor the agreed services and security requirements.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidence about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  -   procedures to authorize access to the Customer’s data by suppliers, in the context of technical support, only after the explicit consent of the Customer;\n  -   procedures to keep up-to-date an exhaustive list of all third parties involved in the implementation of the service;\n  -   requirement to suppliers involved in the implementation of the service to ensure a level of security at least equivalent to that which it undertakes to operationalise its security policy;\n  -   audit clauses enabling a qualifying body to verify that suppliers comply with the security requirements set by the Provider.\n",
        "permissible_standards": [
            "SecNumCloud: 9.7.d, 15.1, 15.2, 15.3, 15.4",
            "EU Cloud CoC (GDPR, XaaS): 6.2.N",
            "CSA CCM: STA-09, STA-10, STA-11, STA-12, DSP-13",
            "ISO/IEC 27001: Annex A 5.19 Annex A 5.20, Annex A 5.21",
            "TISAX: 6.1.1, 6.1.2"
        ],
        "example_standards": [
            "BSI C5: SSO-01, SSI-04"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.15",
        "criterion": "Incident Management: Ensure a consistent and comprehensive approach to the capture, assessment, communication and escalation of security incidents.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from Provider’s documentation or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  -   procedures to provide prompt and effective response to security incidents, including the means and timelines for communicating security incidents and recommendations to limit their impact to all customers concerned;\n  -   procedures related to the communication of responsibilities of internal and external personnel, third party and customers with regard to the reporting of security incidents ; \n  -   procedures and guidelines for the assessment, classification, prioritisation and escalation of security incidents.\n",
        "permissible_standards": [
            "SecNumCloud: 16.1, 16.2, 16.3, 16.4, 16.5",
            "BSI C5: SIM-01, SIM-02, SIM-03, SIM-04, SIM-05, OIS-03, OPS-13, OPS-21",
            "EU Cloud CoC (GDPR, XaaS): 6.2.O, 6.2.P",
            "CSA CCM: SEF-01, SEF-02, SEF-03, SEF-05, SEF-06, SEF-07, SEF-08, LOG-03, LOG-05",
            "ISO/IEC 27001: Annex A 5.24, Annex A 5.25, Annex A 5.26, Annex A 5.27",
            "TISAX: 1.6.1",
            "CISPE (GDPR, Infrastructure & IaaS):  4.9"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.16",
        "criterion": "Business Continuity: Plan, implement, maintain and test procedures and measures for business continuity and emergency management.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidence about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL). The evidence shall detail :\n\n  -   availability of business continuity and emergency plans ;\n  -   procedures to maintain or restore the operation of the service and ensure the availability of information according to the terms agreed with the Customer;\n  -   availability of an offline backup procedure for the configuration of the technical infrastructure. \n  -   definition of responsibilities in relation to business continuity and emergency management.\n",
        "permissible_standards": [
            "SecNumCloud: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6",
            "BSI C5: BCM-01, BCM-02, BCM-03",
            "EU Cloud CoC (GDPR, XaaS): 6.2.Q",
            "CSA CCM: BCR-01, BCR-02, BCR-03, BCR-04, BCR-05, BCR-06, BCR-07, BCR-09, BCR-10",
            "ISO/IEC 27001: Annex A 5.29, Annex A 5.30"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.17",
        "criterion": "Compliance: Avoid non-compliance with legal, regulatory, self-imposed or contractual information security and compliance requirements.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from the Provider’s documentation or in a structured machine-readable format (DSL).  The evidence shall detail:\n\n  -   procedures and mechanisms to identify and document the security needs relevant to information security of the service;\n  -   procedures and mechanisms to identify the legal, regulatory and contractual requirements applicable to the service and procedures to comply with these requirements;\n  -   procedures to document the choices of technical and organisational measures made to meet the personal data protection requirements in relation to the Provider’s role in the processing of data;\n  -   procedures to perform (at least annually) periodical internal audits of the Information Security Management System;\n  -   procedures to provide transparent information on the technical and organisational measures the Provider has in place to protect Customer’s data.\n",
        "permissible_standards": [
            "SecNumCloud: 8.3, 18.1, 18.3",
            "BSI C5: COM-01, COM-03",
            "EU Cloud CoC (GDPR, XaaS): 6.3.A",
            "ISO/IEC 27001: Annex A 5.31",
            "TISAX: 7.1.1"
        ],
        "example_standards": [
            "CSA CCM: GRC-07, HRS-13, A&A-04"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.18",
        "criterion": "User documentation: Provide up-to-date information on the secure configuration and known vulnerabilities of the cloud service for cloud customers.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from the Provider’s documentation made available to customers or in a structured machine-readable format (DSL).  The evidence shall detail:\n\n  -   guidelines and recommendations for the secure use of the service provided;\n  -   refer to a register of known vulnerabilities affecting the service offering.\n",
        "permissible_standards": [
            "BSI C5: PSS-01, PSS-03",
            "EU Cloud CoC (GDPR, XaaS): 6.3.A",
            "CISPE (GDPR, Infrastructure & IaaS):  5.*"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.19",
        "criterion": "Dealing with information requests from government agencies: Ensure appropriate handling of government investigation requests for legal review, information to cloud customers, and limitation of access to or disclosure of Customer Data.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from Provider’s documentation or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  - procedures to submit to a legal assessment the investigation requests from government agencies ;\n  - procedures to respond to requests by government agencies in due time and with appropriate detail and quality.\n  - procedures to inform the Customer when it receives a request from the government agency relating to Customer Data, if permitted by law ;\n  - procedures to ensure that the agencies submitting investigation requests only gain access to or insight into the data that is the subject of the investigation request. If no clear limitation of the data is possible, procedures to anonymise or pseudonymise the data.\n",
        "permissible_standards": [
            "BSI C5: INQ-01, INQ-02, INQ-03, INQ-04",
            "EU Cloud CoC (GDPR, XaaS): 5.11.B, 5.11.C"
        ],
        "example_standards": [
            "CSA CCM: DSP-12, DSP-18"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P3.1.20",
        "criterion": "Product security: Provide appropriate mechanisms for cloud customers to enable product security.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from the legally binding act/other Provider’s documentation made available to the Customer or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  -   Guidelines and recommendations for the secure use of the service provided;\n  -   Error handling, logging and authentication mechanisms;\n  -   Implementation of a session management system.\n",
        "permissible_standards": [
            "BSI C5: PSS-01, PSS-04, PSS-05, PSS-06, PSS-08, PSS-10, PSS-11, PSS-12",
            "CISPE (GDPR, Infrastructure & IaaS):  5.1, 5.3, 4.3",
            "EU Cloud CoC (GDPR, XaaS): 5.1.C"
        ],
        "example_standards": [
            "CSA CCM: IAM-11"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P4.1.1",
        "criterion": "The Provider shall implement practices for facilitating the switching of Providers and the porting of Customer Data in a structured, commonly used and machine-readable format including open standard formats where required or requested by the Customer.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL), shall be provided. The evidence shall detail:\n\n  - Information on the contractual provisions allowing the Customer to retrieve all of its data;\n  - List of methods to import and export Customer Data in a structured, commonly used and machine-readable format.\n",
        "permissible_standards": [
            "SecNumCloud: 19.1.g, 19.1.h",
            "SWIPO IaaS: DP01, DP02, DP03, DP04, DP05, DP08"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P4.1.2",
        "criterion": "The Provider shall ensure pre-contractual information exists, with sufficiently detailed, clear and transparent information regarding the processes of Customer Data portability, technical requirements, timeframes and charges that apply in case a professional user wants to switch to another Provider or port Customer Data back to its own IT systems.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "certification",
        "declaration": "Description based on either 1. or 2.: \n\n  1. Using the Gaia-X Ontology, evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL), shall be provided.\n  The evidence shall detail:\n\n    - Information on the following elements: documentation, available support and tools, data porting processes and supported capabilities, available porting methods and formats, charges and terms associated with porting, procedures for handling the Customer data on the Provider’s infrastructure after termination of the service, third parties that have access to the data through the process, policies and process for accessing data in the event of Provider’s bankruptcy or acquisition by another entity;\n    - Procedures for initiating and managing switching and porting from/to the Service.\n  2. Declaration of compliance to criterion [4.1.2](#P4.1.2). \n",
        "permissible_standards": [
            "SWIPO IaaS: TR03, PR01, PR02, PR03, PR04, PR06, PR07"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P5.1.1",
        "criterion": "For Label Level 2, the Provider shall provide the option that all Customer Data are processed and stored exclusively in EU/EEA.",
        "standard_compliance": "N/A",
        "labelL1": "N/A",
        "labelL2": "certification",
        "labelL3": "N/A",
        "declaration": "N/A",
        "permissible_standards": [
            "SecNumCloud: 19.1, 19.2",
            "CISPE (GDPR, Infrastructure & IaaS): 4.4"
        ],
        "example_standards": [
            "BSI C5: PSS-12"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P5.1.2",
        "criterion": "For Label Level 3, the Provider shall process and store all Customer Data exclusively in the EU/EEA.",
        "standard_compliance": "N/A",
        "labelL1": "N/A",
        "labelL2": "N/A",
        "labelL3": "certification",
        "declaration": "N/A",
        "permissible_standards": [
            "SecNumCloud: 19.1, 19.2",
            "CISPE (GDPR, Infrastructure & IaaS): 4.4"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P5.1.3",
        "criterion": "For Label Level 3, where the Provider or subcontractor is subject to legal obligations to transmit or disclose Customer Data on the basis of a non-EU/EEA statutory order, the Provider shall have verified safeguards in place to ensure that any access request is compliant with EU/EEA/Member State law.",
        "standard_compliance": "N/A",
        "labelL1": "N/A",
        "labelL2": "N/A",
        "labelL3": "certification",
        "declaration": "N/A",
        "permissible_standards": [],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P5.1.4",
        "criterion": "For Label Level 3, the Provider’s registered head office, headquarters and main establishment shall be established in a Member State of the EU/EEA.",
        "standard_compliance": "N/A",
        "labelL1": "N/A",
        "labelL2": "N/A",
        "labelL3": "certification",
        "declaration": "N/A",
        "permissible_standards": [
            "SecNumCloud: 19.6"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P5.1.5",
        "criterion": "For Label Level 3, Shareholders in the Provider, whose registered head office, headquarters and main establishment are not established in a Member State of the EU/EEA shall not, directly or indirectly, individually or jointly, hold control of the CSP. Control is defined as the ability of a natural or legal person to exercise decisive influence directly or indirectly on the CSP through one or more intermediate entities, de jure or de facto. (cf. Council Regulation No 139/2004 and Commission Consolidated Jurisdictional Notice under Council Regulation (EC) No 139/2004 for illustrations of decisive control).",
        "standard_compliance": "N/A",
        "labelL1": "N/A",
        "labelL2": "N/A",
        "labelL3": "certification",
        "declaration": "N/A",
        "permissible_standards": [],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P5.1.6",
        "criterion": "For Label Level 3, in the event of recourse by the Provider, in the context of the services provided to the Customer, to the services of a third-party company - including a subcontractor - whose registered head office, headquarters and main establishment is outside of the European Union or who is owned or controlled directly or indirectly by another third-party company registered outside the EU/EEA, the third-party company shall have no access over the Customer Data nor access and identity management for the services provided to the Customer. The Provider, including any of its sub-processors, shall push back any request received from non-European authorities to obtain communication of Customer Data relating to European Customers, except if request is made in execution of a court judgment or order that is valid and compliant under Union law and applicable Member States law as provided by Article 48 GDPR.",
        "standard_compliance": "N/A",
        "labelL1": "N/A",
        "labelL2": "N/A",
        "labelL3": "certification",
        "declaration": "N/A",
        "permissible_standards": [],
        "example_standards": [
            "SecNumCloud: 19.6"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P5.1.7",
        "criterion": "For Label Level 3, the Provider must maintain continuous operating autonomy for all or part of the services it provides. The concept of operating autonomy shall be understood as the ability to maintain the provision of the cloud computing service by drawing on the provider’s own skills or by using adequate alternatives",
        "standard_compliance": "N/A",
        "labelL1": "N/A",
        "labelL2": "N/A",
        "labelL3": "certification",
        "declaration": "N/A",
        "permissible_standards": [
            "SecNumCloud: 19.6.d"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P5.2.1",
        "criterion": "The Provider shall not access Customer Data unless authorized by the Customer or when the access is in accordance with applicable laws in scope of the legally binding act.",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Using the Gaia-X Ontology, the declaration shall include evidences about the provisions covering the criterion, either copied from the legally binding document or in a structured machine-readable format (DSL). The evidence shall detail:\n\n  - policies and guidelines to ensure that Customer Data is not accessed by the Provider for any purpose independent of Customer’s instructions as provided in the legally binding act, and/or has been explicitly requested by the Customer and/or is necessary to comply with applicable laws in the scope of the legally binding act.\n",
        "permissible_standards": [
            "CISPE (GDPR, Infrastructure & IaaS): 3",
            "EU Cloud CoC (GDPR, XaaS): 5.4.A, 5.4.B, 5.4.C, 5.12.C"
        ],
        "example_standards": [
            "SecNumCloud: 9.7",
            "BSI C5: IDM-07",
            "CSA CCM: DSP-15"
        ],
        "point_of_reference_standards": []
    },
    {
        "id": "P6.1.1",
        "criterion": "The Provider shall provide transparency on the environmental impact of the Service Offering provided",
        "standard_compliance": "declaration",
        "labelL1": "declaration",
        "labelL2": "declaration",
        "labelL3": "declaration",
        "declaration": "Link to an environmental impact report of the Provider. The report shall describe the consumption of natural resources such as water and energy sources, the carbon footprint, the use of pollutants and other factors.",
        "permissible_standards": [],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P6.1.2",
        "criterion": "The Provider shall ensure that the Service Offering meets or relies on an infrastructure Services Offering which meets a high standard in energy efficiency, meeting an annual target of PUE of 1.3 in cool climates and 1.4 in warm climates",
        "standard_compliance": "N/A",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Declaration based either on 1. or 2.:\n\n  1. Using the Gaia-X Ontology, the declaration shall contain the value of Power usage effectiveness (PUE) met by the Service Offering/by the Infrastructure Services Offering it relies on, meeting an annual target of PUE of 1.3 in cool climates and 1.4 in warm climates.\n  2. the declaration shall contain the link to the public registered Provider's adherence to one of the Permissible Standards.\n",
        "permissible_standards": [
            "Climate Neutral Data Centre Pact (CNDCP)"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P6.1.3",
        "criterion": "The Provider shall ensure that the Service Offering meets or relies on an infrastructure Services Offering for which electricity demand will be matched by 75% renewable energy or hourly carbon-free energy by 31st December 2025, and 100% by 31st December 2030.",
        "standard_compliance": "N/A",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Declaration based either on 1. or 2.:\n\n  1. Using the Gaia-X Ontology, the declaration shall contain the percentage of renewable energy or hourly carbon free energy matching the electricity demand of the Service Offering/the infrastructure Services it relies on. The value shall be equal to or greater than 75 by 31st December 2025, and equal to 100 by 31st December 2030.\n  2. the declaration shall contain the link to the public registered Provider's adherence to one of the Permissible Standards. \n",
        "permissible_standards": [
            "Climate Neutral Data Centre Pact (CNDCP)"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    },
    {
        "id": "P6.1.4",
        "criterion": "The Provider shall ensure that the Service Offering meets or relies on an infrastructure Services Offering that will meet a high standard for water conservation demonstrated through the application of a location and source sensitive water usage effectiveness (WUE)target of 0.4 L/kWh in areas with water stress.",
        "standard_compliance": "N/A",
        "labelL1": "declaration",
        "labelL2": "certification",
        "labelL3": "certification",
        "declaration": "Description based either on 1. or 2.:\n\n  1. Using the Gaia-X Ontology, the declaration shall contain the value of Water usage effectiveness (WUE) met by the Service Offering/by the infrastructure Services it relies on. By January 1, 2025 the maximum WUE is set to 0.4 L/kWh in areas with water stress for new data centres at full capacity in cool climates that use potable water.\n  2. the declaration shall contain the link to the public registered Provider's adherence to one of the Permissible Standards.\n",
        "permissible_standards": [
            "Climate Neutral Data Centre Pact (CNDCP)"
        ],
        "example_standards": [],
        "point_of_reference_standards": []
    }
]

module.exports = { criteria };