# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.
# //////////////////////////////////////////////////// Todd's Pesdo code ///////////////////////////////////////////////////
# So I broke this problem down by first starting out researching and googling how to do it.
# My first couple of tries all I did was put in a function that would tell me how many o were in the array
# Then I graduated to printing the words. By breaking it down Barney style I was able to come up with the answer.
# I want you to know though that Even though we are four weeks into class seeing problems like this still scares me. 
# I don't want to fail, I have a lot riding on me succeeding.
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
# p beverages_array.join.include?('o')
p beverages_array.select { |word| word.match('o') } 
p beverages_array.select { |word| word.match('t') } 

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# //////////////////////////////////////////////////// Todd's Pesdo code ///////////////////////////////////////////////////
# I have to start by saying thank you and I have a deep appreciation and admiration for Sarah and Austin you guys are awesome.
# Because of you guys I read the question and took the hint and read the article and it made this problem so much easier.
# Words cannot describe how much easier this problem was with your guises help
# Once again I broke it down Barney style took it one at a time and created the functions and they were successful.
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

p album1.delete "aeiou"
p album2.delete "aeiou"
p album3.delete "aeiouAEIOU"



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.
## //////////////////////////////////////////////////// Todd's Pesdo code ///////////////////////////////////////////////////
# By following the examples in the syllabus I was able to construct my class and my initializer.
# I think that I was just trying to over complicate things by trying to worry about it not showing Word for Word show_bike_info
# Another thing I learned is that you need to Pascal case your classes
# This was a good challenge for me because it helped reinforce what we learned in class.
# I swear sometimes you guys are talking and I'm trying to listen but I don't hear anything you say until we start doing the assessments and
# then it's like oh I guess I was paying attention because somethings just come flooding back.
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Bike
    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def get_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster speed
        @current_speed += speed
    end
    def brake brake_strength
        if @current_speed - brake_strength > 0
            @current_speed = 0
        end
    end
end
trek = Bike.new 'trek'
p trek.get_info
trek.pedal_faster 7
p trek.get_info

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

  
  



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
