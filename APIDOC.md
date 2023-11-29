# Jokebook API Documentation
The Jokebook API provides information on the joke and response based 
on the category selected. 

## *Fill in Endpoint 1 Title*
**Request Format:** /all

**Request Type:** GET

**Returned Data Format**: Plain Text

**Description:** Returns a description of possible categories on a new line.


**Example Request:** /all

**Example Response:**
*Fill in example response in the ticks*

```
a possible category is funnyJoke
a possible category is lameJoke

```

**Error Handling:**
- N/A

## *Fill in Endpoint 2 Title*
**Request Format:** /jokebook/joke/:category

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns 

**Example Request:** /jokebook/joke/funnyJoke

**Example Response:**
*Fill in example response in the {}*

```json
{
    'joke': 'Why did the student not do his homework?',
    'response': 'Because the dog ate his homework!'
}
```

**Error Handling:**
- If category name is not vaild sets response status to 400 and responds with plain text: `Category not found`
- If category name is not provided then responds with plain text: `Cannot GET {url}`
