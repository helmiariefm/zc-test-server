# Pasien API Documentation

## Endpoints :

List of available endpoints:

- `GET /pasien-list`
- `POST /add-pasien`
- `GET /pasien-detail/:id`
- `PUT /edit:id`
- `DELETE /delete/:id`

## 1. GET /pasien-list
Endpoint GET /pasien-list digunakan untuk menampilkan data pasien yang ada di database.
Response Status:  **200**  - OK
Response Body:
```json
[
    {
        "id": 1,
        "name": "Elon Musk",
        "sex": "Male",
        "religion": "Islam",
        "phone": "08123456789",
        "address": "Sragen",
        "nik": "123123234234",
        "createdAt": "2023-05-10T10:07:17.442Z",
        "updatedAt": "2023-05-10T10:07:17.442Z"
    },
    {
        "id": 2,
        "name": "Steve Jobs",
        "sex": "Male",
        "religion": "Islam",
        "phone": "081324354657",
        "address": "Bantul",
        "nik": "13243546576879",
        "createdAt": "2023-05-10T10:08:50.445Z",
        "updatedAt": "2023-05-10T12:57:56.114Z"
    },
    {
        "id": 4,
        "name": "Rotschild",
        "sex": "Male",
        "religion": "Yahudi",
        "phone": "08123456789",
        "address": "Cirebon",
        "nik": "1029384756",
        "createdAt": "2023-05-10T14:49:04.512Z",
        "updatedAt": "2023-05-10T14:49:04.512Z"
    }
]
```
Response Error: **500** - Internal Server Error
```json
{}
```

## 2. POST /add-pasien
Endpoint POST /add-pasien digunakan untuk menambahkan data pasien baru ke dalam database.
Response Status:  **201**  - Created
Response Body:
```json
{
    "id": 4,
    "name": "Rotschild",
    "sex": "Male",
    "religion": "Yahudi",
    "phone": "08123456789",
    "address": "Cirebon",
    "nik": "1029384756",
    "updatedAt": "2023-05-10T14:49:04.512Z",
    "createdAt": "2023-05-10T14:49:04.512Z"
}
```
Response Error: **500** - Internal Server Error
```json
{}
```

## 3. GET /pasien-detail/:id
Endpoint GET /pasien-detail/:id digunakan untuk menampilkan pasien berdasarkan id pasien.
Response Status:  **200**  - OK
Response Body:
```json
{
    "id": 1,
    "name": "Elon Musk",
    "sex": "Male",
    "religion": "Islam",
    "phone": "08123456789",
    "address": "Sragen",
    "nik": "123123234234",
    "createdAt": "2023-05-10T10:07:17.442Z",
    "updatedAt": "2023-05-10T10:07:17.442Z"
}
```
Response Error: **404** - Not Found
```json
{
    "message": "Pasien Not Found"
}
```
Response Error: **500** - Internal Server Error
```json
{}
```

## 4. PUT /edit/:id
Endpoint PUT /edit/:id digunakan untuk mengupdate data pasien berdasarkan id pasien.
Response Body: 
```json
{
    "message": "Steve Jobs has been edited"
}
```
Response Error: **500** - Internal Server Error
```json
{}
```

## 5. DELETE /delete/:id
Endpoint DELETE /delete/:id digunakan untuk menghapus pasien berdasarkan id pasien.
Response Status:  **200**  - OK
```json
{
    "message": "Rotschild has been deleted from database"
}
```
Response Error: **404** - Not Found
```json
{
    "message": "Pasien Not Found"
}
```
Response Error: **500** - Internal Server Error
```json
{}
```