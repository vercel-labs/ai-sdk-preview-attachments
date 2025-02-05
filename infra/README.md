# Mini-CV Infra

This document provides an overview of the infrastructure setup for the Mini-CV Tool, which includes various Azure resources such as Managed Identity, Azure OpenAI, Redis Cache, Key Vault, and App Services. The infrastructure is defined using Bicep templates and can be deployed using PowerShell scripts.

## Features

- Managed Identity: Used for secure access to Azure resources.
- Azure OpenAI: Provides AI capabilities for generating MiniCVs.
- Redis Cache: Used for session management and caching.
- Key Vault: Securely stores secrets and keys.
- App Services: Hosts the client and server applications.

## Getting Started

### Prerequisites

- Azure CLI
https://learn.microsoft.com/en-us/cli/azure/install-azure-cli

- Installing Bicep extension to VScode is highly recommended
https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-bicep

### Running deployment manually

Login to Azure CLI

```
az login
```

To deploy the infrastructure, use the provided PowerShell scripts:
- Development Environment: 
    ```
    .\deploy_dev.ps1
    ```
- Test Environment: 
    ```
    .\deploy_test.ps1
    ```
These scripts generate a random session secret and deploy the infrastructure using the Bicep templates.

- Or deploy using 'az deployment'

```
az deployment group create --name 'deployment name' `
                           --resource-group 'resource group' `
                           --template-file 'template.bicep' `
                           --parameters sessionSecret='random string' `
                                        num='deployment number eg. 000' `
                                        environment='environment name' `
```


### Templates

- **template.bicep**
The main Bicep template that orchestrates the deployment of all resources.

## Additional Notes

Authentication settings and client environment variables are configured manually.
  - both of these settings are not overwritten by 'az deployment'