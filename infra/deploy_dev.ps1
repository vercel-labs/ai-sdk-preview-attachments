az deployment group create --name 'deployment-sogetiriku-dev-swedencentral-001' `
                           --resource-group 'rg-sogetiriku-dev-swedencentral-001' `
                           --template-file 'template.bicep' `
                           --parameters num='000' environment='dev'