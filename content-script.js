chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.cmd == 'change') {
            const removeDom = document.getElementsByClassName(request.m)[0];
            if (removeDom?.style?.display === 'none') {
                removeDom.style.display = 'block';
            } else {
                removeDom.style.display = 'none';
            }
        }
        sendResponse('我收到了你的消息！');
    });