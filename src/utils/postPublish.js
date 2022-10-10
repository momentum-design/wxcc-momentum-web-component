const axios = require("axios");

const sendWebexMessage = async () => {
  axios
    .post(
      "/https://webexapis.com/v1/webhooks/incoming/Y2lzY29zcGFyazovL3VzL1dFQkhPT0svMDc3ZjBlNTMtZjhlNC00NDM2LTk2MzYtNGVmYzk3NmRkNjNj",
      {
        markdown: "${markdown}"
      },
      {
        headers: {
          // See: http://bit.ly/text-json
          "Content-Type": "application/json"
        }
      }
    )
    .then(function(response) {
      console.log("posted in webex team");
    })
    .catch(function(error) {
      console.log(error);
    });
};

const postPublish = async () => {
  sendWebexMessage();
};

postPublish();
