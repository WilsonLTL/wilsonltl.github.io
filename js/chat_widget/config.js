let url = "https://d1cep308rcoon.cloudfront.net/sub_agent";

let nlp_noresponse_msg = '不好意思，我不明白你說什麼😥'

let default_home_msg = '你好,好高興見到你呀 (▰˘◡˘▰)'

let default_home_reply_msg = [
    {question:"講多啲關於你Master嘅嘢.",answer:"reply_message"},
    {question:"乜嘢係Milk Tea System?",answer:"reply_message"}
    ]

let default_reply_msg = {
    question: "Home",
    answer: "ice"
}

let data = {
    "system_id":12312,
    "agent_id":"y6gHB",
    "text":"Hi"
}

let convo = {}

widget_status = true

let initSetting = function () {

    return Promise.resolve(
        axios.post(url,data).then(function (res) {
            console.log(res.data['Speech'])
            convo = {
                ice: {
                    says: [default_home_msg],
                    reply: default_home_reply_msg
                },
                reply_message: {
                    says: [default_home_msg],
                    reply: [
                        {
                            question: "Home",
                            answer: "ice"
                        }
                    ]
                }
            };

            initBubble()
            return widget_status
        })
    )
}
