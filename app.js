    var counter = 0;
    var profiles = [
      {
        age: 21,
        first_name: "Shawn",
        last_name: "Mendes",
        hometown: "Ontario",
        occupation: "Player...of the Guitar",
        jpg: "https://specials-images.forbesimg.com/imageserve/1170573705/960x0.jpg?fit=scale"
      },
      {
        age: 37,
        first_name: "Ali",
        last_name: "Wong",
        hometown: "San Francisco",
        occupation: "Ego Crusher",
        jpg: "https://marriedwiki.com/uploads/bio/2017/02/03/thumb/ali-wong-260-260.jpeg"
      },
      {
        age: 20,
        first_name: "Mufasa",
        last_name: "Lion",
        hometown: "Kenya",
        occupation: "Safari King",
        jpg:"https://lh3.googleusercontent.com/proxy/6Gj26PZi12ASskZqQwLNV_MclckNKzXKqCN-Vm0-OGYmTNKDZ9bnCWlCKtIISZpSJSemsDS5bF9cG98_kLfHvF1dF-SNaL8rWLyb"
      },
      {
        age: 70,
        first_name: "Elizabeth",
        last_name: "Warren",
        hometown: "Oklahoma City",
        occupation: "Liberal Banker",
        jpg:"https://pbs.twimg.com/profile_images/1215406626049413121/LiVKh64l_400x400.jpg"
      },
      {
        age: 79,
        first_name: "Anthony",
        last_name: "Fauci",
        hometown: "NYC",
        occupation: "COVID Curer",
        jpg: "https://www.americanthinker.com/images/bucket/2020-03/219986.png"
      }
    ]
    
 
    
    //document.getElementById('profile_pic').src = profiles[counter].jpg;
    //document.getElementById('name').innerHTML = profile.first_name + " " + profile.last_name;

    function update_profile(counter){
      var profile = profiles[counter]
      
      document.getElementById('name').innerHTML = "Name: " + profile.first_name + " " + profile.last_name;
      document.getElementById('profile_pic').src = profile.jpg;
      document.getElementById('age').innerHTML = "Age: " + profile.age;
      document.getElementById('hometown').innerHTML = "Hometown: " + profile.hometown;
      document.getElementById('occupation').innerHTML = "Occupation: " + profile.occupation;
     
      
    }
    
    function swipe(direction){
      var profile = profiles[counter];
      analytics.track('Swiped ' + direction, {
        name: profile.name,
        age: profile.age,
        first_name: profile.first_name,
        occupation: profile.occupation,
        hometown: profile.hometown
      });
      counter = counter + 1;
      update_profile(counter);
    }
    
    function swipe_left(){
      swipe('Left')
    }
    
    function swipe_right(){
      swipe('Right')
    }
    
    update_profile(counter);
    