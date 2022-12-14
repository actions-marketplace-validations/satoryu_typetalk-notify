const core = require('@actions/core')

const typetalkToken = core.getInput('token')
const topicId = core.getInput('topic_id')
const message = core.getInput('message')

import notifyToTypeTalkTopic from './src/typetalk_notifier'

notifyToTypeTalkTopic(topicId, message, typetalkToken)
  .catch((error) => { core.setFailed(error.message)})
