@description('Base name of the resource such as web app name and app service plan ')
@minLength(2)
param webAppName string = 'openmodelplayground'

@description('Environment of the resource such as test, prod, dev')
param environment string = 'test'

@description('Running number of the resource')
param num string = '001'

@description('The SKU of App Service Plan ')
param sku string = 'B1'

@description('The Runtime stack of current web app')
param linuxFxVersion string = 'NODE:20LTS'

@description('Location for all resources.')
param location string = resourceGroup().location

var webAppClientName = 'client-${webAppName}-${environment}-${num}'
var appServicePlanName = 'appserviceplan-${webAppName}-${environment}-${num}'

// Create an app service plan for client and server
resource appServicePlan 'Microsoft.Web/serverfarms@2022-03-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: sku
  }
  kind: 'linux'
  properties: {
    reserved: true
  }
}

// Web App for client
resource webAppClient 'Microsoft.Web/sites@2022-03-01' = {
  name: webAppClientName
  location: location
  kind: 'app'
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: linuxFxVersion
      ftpsState: 'FtpsOnly'
      alwaysOn: true
    }
    httpsOnly: true
  }
  identity: {
    type: 'SystemAssigned'
  }
}

// Environment Variables
resource SettingsClient 'Microsoft.Web/sites/config@2022-09-01' = {
  name: 'web'
  kind: 'string'
  parent: webAppClient
  properties: {
    linuxFxVersion: 'NODE|20-lts'
    numberOfWorkers: 1
    alwaysOn: true
    appCommandLine: 'npm run build && npm start'
  }
}
