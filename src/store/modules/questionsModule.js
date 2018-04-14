import _questionsData from '../../data/questionsData';

const state = {
    imageListNames: imagesNames,
    userAnswersData: [],
    userAnswerIndex: 0,
    userDetails: {},
    isLoaded: false
};

const mutations = {
    'SET_LOADED_IMAGES_STATUS' (state, status) {
        state.isLoaded = status;
    },
    'SET_USER_ANSWER' (state, _userAnswer) {
        state.userAnswersData.userAnswer = _userAnswer;
    },
    'SET_QUESTIONS_DATA' (state, questionData) {
        state.userAnswersData.push(questionData)
    },
    'SET_USER_DETAILS' (state, _userDetails) {
        state.userDetails = _userDetails;
    },
    'INCREASE_USER_DATA_INDEX' (state) {
        state.userAnswerIndex++;
    },
    'SET_CURRENT_IMAGE' (state, imageUrl) {
        state.currentImageUrl = imageUrl;
    }
};

const actions = {
    setImagesLoadedStatus: ({commit}, status) => {
        commit('SET_LOADED_IMAGES_STATUS', status);
    },
    setUserAnswer: ({commit}, userAnswer) => {
        commit('SET_USER_ANSWER', userAnswer);
    },
    setQuestionData: ({commit}, questionData) => {
        commit('SET_QUESTIONS_DATA', questionData);
    },
    setUserDetails: ({commit}, userDetails) => {
        commit('SET_USER_DETAILS', userDetails);
    },
    increaseUserDataIndex:({commit}) => {
        commit('INCREASE_USER_DATA_INDEX');
    },
    setCurrentImageUrl:({commit}, imageUrl) => {
        commit('SET_CURRENT_IMAGE', imageUrl);
    },
};



const getters = {
    imagesNameData: state => {
        return state.imageListNames;
    },
    userAnswersData: state => {
        return state.userAnswersData;
    },
    userDetails: state => {
        return state.userDetails;
    },
    userDataIndex: state => {
        return state.userAnswerIndex;
    },
    currentImageUrl: state => {
        return state.currentImageUrl;
    },
    isImagesLoaded: state => {
        return state.isLoaded;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};