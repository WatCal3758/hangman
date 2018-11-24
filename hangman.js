
$(document).ready(function()
    {$('#guesses').on
        ('submit', function(event)
            {event.preventDefault();

                const guess = $('#guess');
                const val = guess.val();

                hangman(val);

                guess.val('');

                const active = $('[data-active="false"]');
            });
var numGuesses = 0;
var numCorrect = 0;
function hangman(guess)
{
    const letter1 = $('[data-letter="1"]');
    const letter2 = $('[data-letter="2"]');
    const letter3 = $('[data-letter="3"]');
    const letter4 = $('[data-letter="4"]');

    switch(guess.toLowerCase())
    {
        case 't':
          letter1
            .text('T')
            .attr('data-active', 'true');
            numCorrect++;
          letter4
            .text('T')
            .attr('data-active', 'true');
            numCorrect++;
          break;
        case 'e':
          letter2
            .text('E')
            .attr('data-active', 'true');
            numCorrect++;
          break;
        case 's':
          letter3
            .text('S')
            .attr('data-active', 'true');
            numCorrect++;
          break;
        default:
            numGuesses++;
          break;
    }
    if(numGuesses > 10)
        {
             alert("You Lose!");
        }
    if(numCorrect == 4)
        {
            alert("You Win!");
        }
}
});