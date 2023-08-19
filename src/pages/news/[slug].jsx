
import Image from 'next/image';

const fetchPostData = async (id) => {
    const response = await fetch(`http://wp.mypalwal.com/wp-json/wp/v2/posts/${id}`);
    const data = await response.json();
    return data;
};

const PostDetails = ({ postData }) => {
    const p = postData
    return (
        <article className='my-4 flex flex-col gap-2'>
            <h1 className='font-bold text-4xl '>{p.title.rendered}</h1>
            <div className='flex gap-2'>
                <div className='flex justify-start items-center text-lg gap-1'>
                    <i className='bx bxs-time' ></i>
                    <h6 className='font-semibold'>{p.date.slice(0, 10)}</h6>
                </div>
                <div>
                    <button className='flex justify-start items-center text-lg gap-1'>
                        <i className='bx bxs-user-circle bx-sm'></i>
                        <h6 className='font-semibold'>Admin</h6>
                    </button>
                </div>
            </div>
            <Image width={800} height={600} src={p.featured_media_src_url} alt='ad' />
            <p className='text-xl prose content' dangerouslySetInnerHTML={{ __html: p.content.rendered }} ></p>
            <span>TAGS: {p.tags}</span>
        </article>
    );
};

export async function getServerSideProps(context) {
    const { params } = context;
    const getNumberAfterLastHyphen = str =>
        +str.split('-').pop().match(/\d+/);
    const numb = getNumberAfterLastHyphen(params.slug);
    const postData = await fetchPostData(numb);

    return {
        props: {
            postData,
        },
    };
}

export default PostDetails;
