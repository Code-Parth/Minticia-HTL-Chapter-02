import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'uv98hpd1',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'sktHJmgWAH32SgRburZmF1hmv1U806dbdT1jFk2Qz6UavZh5plCezGFlmRjDZUz4GE46NztcxPkIGK7LpcnxHYjMrJkZW02rJj6kRQRYNlCxwcWMAiE48P6YyMCdSkiJ4FdXo6qQCIkXxws6hBYDW3WF9GCnzLP8WoY5bfHCu0ROaisPn7kr',
  useCdn: false,
})
