const activityData = [
    {
        time: "15:20 ~ 15:30",
        title: "안전 교육",
        duration: 10,
        details: `
            <h3 class="text-2xl font-bold text-gray-800 mb-4">⛑️ 안전 교육</h3>
            <p class="text-gray-700 mb-4">오늘 진행될 활동들을 안전하게 즐기기 위한 규칙을 배우는 시간입니다. 모두의 안전을 위해 잠시 집중해주세요!</p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li>활동 장소의 위험 요소를 미리 파악해요.</li>
                <li>친구를 밀치거나 위험한 장난은 절대 금지!</li>
                <li>몸이 안 좋거나 다쳤을 경우 즉시 선생님께 알려주세요.</li>
            </ul>
        `
    },
    {
        time: "15:30 ~ 15:50",
        title: "숨바꼭질 1라운드",
        duration: 20,
        details: `
            <h3 class="text-2xl font-bold text-gray-800 mb-4">🔍 숨바꼭질 규칙 (1 & 2 라운드)</h3>
            <div class="space-y-3 text-gray-700">
                <p><span class="font-bold text-orange-600">① 준비:</span> 술래 반은 3분간 9반 교실에서 대기하고, 숨는 반은 3분간 지정된 구역(3층, 4층)에 숨습니다.</p>
                <p><span class="font-bold text-orange-600">② 시작:</span> 3분이 지나면 술래 반은 출발! 10분 동안 숨어있는 친구들을 찾습니다.</p>
                <p><span class="font-bold text-orange-600">③ 검거:</span> 술래에게 잡힌 친구는 2학년 9반으로 이동하여 대기합니다.</p>
                <p><span class="font-bold text-orange-600">④ 안전제일:</span> 위험한 장소나 출입이 금지된 곳에는 절대 숨지 않습니다.</p>
                <p><span class="font-bold text-orange-600">⑤ 승리조건:</span> 10분의 제한 시간 안에 더 많은 친구들을 찾아내는 반이 승리합니다!</p>
            </div>
        `
    },
    {
        time: "16:00 ~ 16:20",
        title: "숨바꼭질 2라운드",
        duration: 20,
        details: `
            <h3 class="text-2xl font-bold text-gray-800 mb-4">🔍 숨바꼭질 규칙 (1 & 2 라운드)</h3>
             <div class="space-y-3 text-gray-700">
                <p><span class="font-bold text-orange-600">① 준비:</span> 술래 반은 3분간 9반 교실에서 대기하고, 숨는 반은 3분간 지정된 구역(3층, 4층)에 숨습니다.</p>
                <p><span class="font-bold text-orange-600">② 시작:</span> 3분이 지나면 술래 반은 출발! 10분 동안 숨어있는 친구들을 찾습니다.</p>
                <p><span class="font-bold text-orange-600">③ 검거:</span> 술래에게 잡힌 친구는 2학년 9반으로 이동하여 대기합니다.</p>
                <p><span class="font-bold text-orange-600">④ 안전제일:</span> 위험한 장소나 출입이 금지된 곳에는 절대 숨지 않습니다.</p>
                <p><span class="font-bold text-orange-600">⑤ 승리조건:</span> 10분의 제한 시간 안에 더 많은 친구들을 찾아내는 반이 승리합니다!</p>
            </div>
        `
    },
    {
        time: "16:30 ~ 17:30",
        title: "츄크볼",
        duration: 60,
        details: `
            <h3 class="text-2xl font-bold text-gray-800 mb-4">🏀 츄크볼 (남/여/혼성)</h3>
            <p class="text-gray-700 mb-4">팀워크와 전략이 중요한 뉴스포츠, 츄크볼 시간입니다! 패스하고, 슛하고, 점수를 내며 즐거운 시간을 보내요.</p>
            <p class="text-gray-600 bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <span class="font-bold">✨ 중요! 츄크볼은 학급 단합과 협력을 위한 활동입니다.</span><br>
                절대 싸우거나 비난하는 말은 하지 말아주세요! 멋진 스포츠 정신을 발휘하여 최선을 다해 협력하고, 승패를 떠나 모두가 행복한 시간을 가질 수 있도록 노력합시다.
            </p>
        `
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');
    const detailsContent = document.getElementById('details-content');

    activityData.forEach((activity, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item p-4 rounded-lg shadow-md border border-gray-200 cursor-pointer bg-white hover:bg-orange-50 transition-all duration-300';
        item.dataset.index = index;
        item.innerHTML = `
            <p class="font-bold text-lg text-orange-700">${activity.title}</p>
            <p class="text-sm text-gray-500">⏰ ${activity.time}</p>
        `;
        item.addEventListener('click', () => {
            document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            
            detailsContent.style.opacity = 0;
            setTimeout(() => {
                detailsContent.innerHTML = activity.details;
                detailsContent.style.opacity = 1;
            }, 300);
        });
        timelineContainer.appendChild(item);
    });

    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('2025-07-17T15:20:00');

    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            countdownElement.innerHTML = "🎉 활동이 시작되었습니다!";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${d}일 ${h}시간 ${m}분 ${s}초 남았어요!`;
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
});