
// Scope
targetScope = 'resourceGroup'

@description('Current environment')
param environment string = 'test'

@description('Running number of resources')
param num string = '001'

// Create an app service
module appModule 'app/app.bicep' = {
  name: 'appModule'
  params: {
    webAppName: 'openmodelplayground'
    sku: 'B1'
    environment: environment
    num: num
    linuxFxVersion: 'NODE:20LTS'
    location: resourceGroup().location
  }
}

