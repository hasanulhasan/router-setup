import React from 'react';

const Home = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 h-full">
        <div className="container p-6 mx-auto space-y-6 sm:space-y-12 h-full">
          <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
            <img src="https://img.freepik.com/free-photo/closeup-fully-grown-vegetable-plants-organic-soil-ready-harvest-delivery-vegan-stores-markets-empty-greenhouse-with-hydroponic-enviroment-growing-bio-vegetables_482257-48696.jpg?w=1380&t=st=1665313809~exp=1665314409~hmac=23e1fa6f49c15c9621da80b2934271d0edc3732a4f2da41ef767ce7da141fd19" alt="" className="object-cover w-full rounded  lg:col-span-9 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-3">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Here you are in a MicoShop to find anything </h3>
              <span className="text-xs dark:text-gray-400">October 10, 2022</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, necessitatibus repudiandae architecto, totam et nesciunt quasi, ipsam mollitia iure accusantium deserunt repellendus culpa numquam. Nulla maxime a praesentium blanditiis doloribus vel consectetur incidunt, magni, soluta quae perspiciatis perferendis enim officia tempore non in. Vel unde qui aliquid, sequi eaque dolore fugiat omnis, eius, voluptate sapiente corporis alias. Dicta totam cupiditate id. Veniam veritatis accusamus eligendi eos ut incidunt iure. Iste hic architecto ratione tenetur voluptatum. Consequuntur tempore doloremque molestiae qui. Repudiandae iusto illum laudantium atque accusamus accusantium iste nesciunt asperiores</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;