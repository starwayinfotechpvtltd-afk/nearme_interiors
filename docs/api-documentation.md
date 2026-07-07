# API Documentation: Near Me Interiors

## Contact & Lead Capture API
- Endpoint: `/api/contact`
- Method: `POST`
- Payload validation using Zod:
  - `name`: string (min 2)
  - `email`: string (valid email)
  - `phone`: string (optional)
  - `website`: string (valid URL)
  - `revenue`: string
