# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "cleaning DB"
Event.destroy_all

puts "create events"

event_attributes = [
    {
        title: "london retail expo",
        datetime: "Monday 21 Oct, 2019 10:00 AM GMT",
        location: "London Excel Centre"
    },
    {
        title: "Entreprise Sales Training Worshop",
        datetime: "Tuesday 22 Oct, 2019 10:00 AM GMT",
        location: "Expert sales Company Headquarters"
    },
    {
        title: "Ruby Hack Night",
        datetime: "Friday 25 Oct, 2019 06:00 PM GMT",
        location: "Learnetto Headquarters"
    },
    {
        title: "Salsa Meetup",
        datetime: "Saturday 26 Oct, 2019 06:00 PM GMT",
    }
]

Event.create(event_attributes)
puts "finished"