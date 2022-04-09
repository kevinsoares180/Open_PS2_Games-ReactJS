import React from "react";

const Error = () => {
  return (
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="font-weight-light">Página não encontrada!</h1>
            <p class="lead">
              O endereço digitado não foi encontrado ou está fora do ar
            </p>
            <img
              className="img-fluid"
              alt="error"
              src="https://stories.freepiklabs.com/storage/26837/oops-404-error-with-a-broken-robot-pana-2854.png"
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Error;
