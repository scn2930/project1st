document.querySelectorAll('.game_card').forEach(card => {
    card.addEventListener('click', function() {
        const gameDetails = document.getElementById('game_details');
        const gameName = this.getAttribute('data-game');
        
        // Update game details based on the clicked game
        switch(gameName) {
            case 'splendor':
                document.getElementById('game_image').src = 'img/game/splan.png';
                document.getElementById('game_title').innerHTML = '스플렌더 <span>Splendor</span>';
                document.getElementById('game_description').innerHTML = '2015년 판매량 1위에 빛나는 보석칩으로 카드를 사서 모으는 극강의 두뇌쌤게임';
                document.getElementById('game_difficulty').innerHTML = 'Hard';
                document.getElementById('game_players').innerHTML = '2-4인';
                document.getElementById('game_time').innerHTML = '45분';
                break;
            case 'davinci':
                document.getElementById('game_image').src = 'img/game/davinci.png';
                document.getElementById('game_title').innerHTML = '다빈치코드 <span>DaVinci Code</span>';
                document.getElementById('game_description').innerHTML = '숫자와 논리로 승부하는 추리 게임';
                document.getElementById('game_difficulty').innerHTML = 'Medium';
                document.getElementById('game_players').innerHTML = '3-6인';
                document.getElementById('game_time').innerHTML = '30분';
                break;
            case 'rummikub':
                document.getElementById('game_image').src = 'rummikub.png';
                document.getElementById('game_title').innerHTML = '루미큐브 <span>Rummikub</span>';
                document.getElementById('game_description').innerHTML = '숫자 타일을 이용한 전략 게임';
                document.getElementById('game_difficulty').innerHTML = 'Easy';
                document.getElementById('game_players').innerHTML = '2-4인';
                document.getElementById('game_time').innerHTML = '60분';
                break;
            case 'uno':
                document.getElementById('game_image').src = 'uno.png';
                document.getElementById('game_title').innerHTML = '우노 <span>UNO</span>';
                document.getElementById('game_description').innerHTML = '가족과 친구들이 즐길 수 있는 카드 게임';
                document.getElementById('game_difficulty').innerHTML = 'Easy';
                document.getElementById('game_players').innerHTML = '2-10인';
                document.getElementById('game_time').innerHTML = '20분';
                break;
        }
        
        gameDetails.style.display = 'flex';
    });
});