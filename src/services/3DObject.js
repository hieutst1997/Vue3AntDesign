import restFulAPI from '@/untils/resfulApi';

const get3DObject = async () => {
    try {
        const response = await restFulAPI.get({
            endPoint: `/demo2.json`,
            body: {

            },
        });

        if (response) {
            return response;
        } else {
            return alert('đã xảy ra lỗi vui lòng thử lại')
        }
    } catch (e) {
        throw e;
    }
};


export default {
    get3DObject,
}