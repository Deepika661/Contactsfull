import { VOTE_COUNTER, TIMESTAMP_ORDER } from '../utils/configure';

const orderByVoteCount = data => 
{
    return Array.isArray(data)
      ? data.sort((a, b) => b.voteCounter- a.voteCounter)
      : data;
};

const orderByTimeStamp = data => {
    return Array.isArray(data)
      ? data.sort((a, b) => b.timestamp - a.timestamp)
      : data;
};

export const sortBy = (data, order = VOTE_COUNTER) => {
    switch (order) {

      case VOTE_COUNTER:
        return orderByVoteCount(data);

      case TIMESTAMP_ORDER:
        return orderByTimeStamp(data);
        
      default:
        return data;
    }
};
