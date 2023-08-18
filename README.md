## Sample queries

### Get the Fid associated with a specific Fname

Note that the `Account.fid` field is nullable, because not every account has an Fid.

```graphql
{
  fnames(where: { name: "greg" }) {
    id
    account {
      fid {
        id
      }
    }
  }
}
```

```json
{
  "fnames": [
    {
      "account": {
        "fid": {
          "id": "347"
        }
      }
    }
  ]
}
```
