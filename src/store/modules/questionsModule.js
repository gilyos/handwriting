import _questionsData from '../../data/questionsData';

const state = {
    imageListNames: imagesData,
    userAnswersData: [],
    userAnswerIndex: 0,
    
    userDetails: {
        userId : new Date().getTime(),
        age : '',
        gender : '',
        education : '',
        timeCreated: new Date()
    },
    questions: {
        en: 15,
        heb: 15,
        currectAnswersOn_en: 0,
        currectAnswersOn_heb: 0,
        currentQuestionLang: 'en',
        selectOptions: {
            left:'',
            right:''
        }
    },
    isLoaded: false
};

const mutations = {
    'SET_CURRENT_QUESTION_LANG' (state, lang) {
        state.questions.currentQuestionLang = lang;
    },
    'SET_LOADED_IMAGES_STATUS' (state, status) {
        state.isLoaded = status;
    },
    'SET_USER_ANSWER' (state, _userAnswer) {
        state.userAnswersData[state.userAnswerIndex].userAnswer = _userAnswer;
        debugger;
        if (_userAnswer == state.userAnswersData[state.userAnswerIndex].correctAnswer) {
            
            var curLang = state.questions.currentQuestionLang;
            state.questions['currectAnswersOn_' + curLang]++;
        }
        window.updateDB(
            state.userAnswersData[state.userAnswerIndex].type,
            state.userDetails.userId,
            state.userDetails.age,
            state.userDetails.gender,
            state.userDetails.education,
            state.userAnswersData[state.userAnswerIndex].userAnswer,
            state.userAnswersData[state.userAnswerIndex].correctAnswer,
            state.userAnswersData[state.userAnswerIndex].imgName,
        )
        state.userAnswerIndex++;

    },
    'SET_QUESTIONS_DATA' (state, questionData) {
        state.userAnswersData.push(questionData)
    },
    'INIT_QUESTIONS_DATA' (state) {
        state.userAnswersData = [];
    },
    'SET_USER_DETAILS' (state, _userDetails) {
        state.userDetails = _userDetails;
    },
    'INCREASE_USER_DATA_INDEX' (state) {
        state.userAnswerIndex++;
    },
    'INIT_USER_DATA_INDEX' (state) {
        state.userAnswerIndex = 0;
    },
    'SET_CURRENT_IMAGE' (state, imageUrl) {
        state.currentImageUrl = imageUrl;
    },
    'SET_NUMBER_HEB_QUESTIONS' (state, n) {
        state.questions.heb = n;
    },
    'SET_NUMBER_EN_QUESTIONS' (state, n) {
        state.questions.en = n;
    },
    'SET_SELECTION_TYPE' (state, selectOptions) {
        state.questions.selectOptions = selectOptions;
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
    initQuestionData: ({commit}) => {
        commit('INIT_QUESTIONS_DATA');
    },
    setUserDetails: ({commit}, userDetails) => {
        commit('SET_USER_DETAILS', userDetails);
    },
    increaseUserDataIndex:({commit}) => {
        commit('INCREASE_USER_DATA_INDEX');
    },
    initUserDataIndex:({commit}) => {
        commit('INIT_USER_DATA_INDEX');
    },
    setCurrentImageUrl:({commit}, imageUrl) => {
        commit('SET_CURRENT_IMAGE', imageUrl);
    },
    setNumberHebQuestions:({commit}, n) => {
        commit('SET_NUMBER_HEB_QUESTIONS', n);
    },
    setNumberEnQuestions:({commit}, n) => {
        commit('SET_NUMBER_EN_QUESTIONS', n);
    },
    setSelectionOptions:({commit}, selectOptions) => {
        commit('SET_SELECTION_TYPE', selectOptions);
    }
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
    },
    getNumberHebQuestions: state => {
        return state.questions.heb;
    },
    getNumberEnQuestions: state => {
        return state.questions.en;
    },
    getLeftSelection: state => {
        return state.questions.selectOptions.left;
    },
    getRightSelection: state => {
        return state.questions.selectOptions.right;
    },
    getLeftMarkSelection: state => {
        return state.questions.selectOptions.leftMark;
    },
    getRightMarkSelection: state => {
        return state.questions.selectOptions.rightMark;
    },
    getTypeSelection: state => {
        return state.questions.selectOptions.type;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};