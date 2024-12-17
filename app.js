const audioPlayer = document.getElementById('audioPlayer');
        const audioSource = document.getElementById('audioSource');
        const randomButton = document.getElementById('randomButton');

        const songs = [
            'mp3/julesang1.mp3',
            'mp3/julesang2.mp3',
            'mp3/julesang3.mp3',
            'mp3/julesang4.mp3',
            'mp3/julesang5.mp3'
        ];

        randomButton.addEventListener('click', () => {
            const randomSong = songs[Math.floor(Math.random() * songs.length)];
            audioSource.src = randomSong;
            audioPlayer.load();
            audioPlayer.play();
        });