colossal adventure rpg requirements:
-----------------simple applications----------------
1u. console must greet player with fun message
2u. console must ask for player's name and store it

-----------------functional requirements----------------
1. menu options
    01. walk (triggers walk function)
    02. camp (triggers camp function)

1.01. walk function
    1. pressing w triggers walk  function in menu
    2. when walking, trigger funtion to determine if player encounters enemy
    3. end of walk returns player to menu

1.02. camp function
    1. pressing c triggers camp function in menu
     a. require tent consumable item in order to camp
    2. when camping, fully recover health

----------------walk function requirements---------------
1.01.2. enemy encounter function
    i. if enemy is encountered select enemy type from possible 5
    ii. combat menu
        ii.a. fight
            see combat function requirements.
        ii.b run
            see run function requirements.

--------------combat function requirements-----------------
1.01.2.ii. combat menu
            a. fight function
            fight order determined by speed stat of player vs enemy
            after player and enemy turns return to combat menu
            if player dies return isdead function
            if enemy dies return winbattle function

            b. run function
            run function rolls for chance to escape combat
            if roll success exit combat
            if roll fails enemy attacks for free
                return to combat menu
        