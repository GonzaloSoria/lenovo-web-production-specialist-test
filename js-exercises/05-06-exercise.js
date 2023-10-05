/* 

5) If you had to represent, using JS data types, this list:

Large blue car - Small Red car - Large Blue car - Large Red car – Medium Blue car – Small Red car – Large
Blue car – Medium Red car

How would you do it? 

the same list but with data types can be:

[{
    large: string
    blue: string
    car: object
},{
    Small: string
    Red: string
    car: object
},{
    Large: string
    Blue: string
    car: object
},{
    Large: string
    Red: string
    car: object
},{
    Medium: string
    Blue: string
    car: object
},{
    Small: string
    Red: string
    car: object
},{
    large: string
    blue: string
    car: object
},{
    Medium: string
    red: string
    car: object
}]

-----------------------------------------

6) Using the data from exercise 4. How would you represent it if the data was needed to be accessed
easily by color? And how if it was needed to be accessed by size?

By color:

[{
    cars: [{
        blue: [{
            large: string
        },{
            large: string
        },{
            medium: string
        },{
            large: string
        }],
        red: [{
            Small: string
        },{
            Large: string
        },{
            Small: string
        },{
            Medium: string
        }]
    }]
}]

And by size maybe the same way:

[{
    cars: [{
        large: [{
            blue: string
        },{
            blue: string
        },{
            Red: string
        },{
            blue: string
        }],
        medium: [{
            blue: string
        },{
            Red: string
        }],
        small: [{
            Red: string
        },{
            Red: string
        }],
    }]
}]

*/