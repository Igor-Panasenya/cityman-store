import React, {useState} from 'react';
import ReviewsItem from "./ReviewsItem";

const ReviewsProducts = () => {

    const reviewsProducts = [
        {
            id: 1,
            title: 'Razors made in Germany are made from classic German steel.',
            body: 'Ocherednoye zabluzhdeniye. Istina sostoit v tom, chto takoy stali ne byvayet voobshche. A dlya proizvodstva britv primenyayutsya samyye raznyye vidy staley. Naprimer, v Zolingene instrument vpolne mozhet delat\'sya na osnove sheffildskoy stali.',
            link: 'https://www.youtube.com/watch?v=kTzxuRr41g8',
            IMG: "/img/reviews/reviews1.jpg"
        },
        {
            id: 2,
            title: 'Casio watch.',
            body: 'Why do people buy watches? Not just hours, but several hours. Different, and sometimes similar to each other. After all, no matter how many hours you buy, time will neither increase nor decrease. However. This is where I couldn\'t resist.',
            link: 'https://www.youtube.com/watch?v=JE_-t_FY7yA',
            IMG: "/img/reviews/reviews2.jpg"
        }
    ]

    return (
        <section className="container">
            {reviewsProducts.map(reviewsProduct =>
                <ReviewsItem reviewsProduct={reviewsProduct} key={reviewsProduct.id}/>
            )}
        </section>
    );
};

export default ReviewsProducts;