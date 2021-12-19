This project basically deals with adding data of users to database and getting those data back.

1. Data fields to be stored in database:
    i.   First Name,
    ii.  PAN Number,
    iii. Date of Birth,
    iv.  Gender,
    v.   Email,
    vi. Profile Image
2. Need to have an encryption system for api calls.  
3. Heroku link to access app: http://stark-earth-64459.herokuapp.com/
4. First use this GET operation in postman: http://stark-earth-64459.herokuapp.com/tokenid.
    In body paste {"userName": "admin", "password": "root"}.
    Here after successfull authentication you will get a token. Copy this token.
5.  Open Authorization tab and select Bearer Token then paste the copied token here.
6. Run POST api: https://stark-earth-64459.herokuapp.com/userData with the token pasted in place mentioned in point 5.
    In body paste: 
    {
        "firstName": "232323232",
        "panNumber": "CGKPP6001J",
        "dateOfBirth": "2021/11/15",
        "gender": "female",
        "email": "sertyy@gmai@l.com",
        "profileImage": "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
    }
7. Then for any other api follow point 5.
8. GET api: https://stark-earth-64459.herokuapp.com/userData => fetch data of all the users in db
9. GET user by PAN api: https://stark-earth-64459.herokuapp.com/userData/{panNumber} => fetch particular data of a user on basis of pan
