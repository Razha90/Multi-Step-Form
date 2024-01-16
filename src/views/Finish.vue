<template>
    <div class="finish">
        <div>
            <img src="/icon-thank-you.svg" alt="Thanks You" class="animate__animated animate__jackInTheBox">
        </div>

        <div>
            <h1 class="color-marine-blue fs-2-5 bold-700">Thank you!</h1>
        </div>

        <div>
            <p class="color-cool-gray fs-1-3">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at razha@razha2on.com</p>
        </div>
    </div>
</template>

<style scoped>


img {
    width: 7rem;
}

.finish {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

p {
    text-align: center;
    line-height: 1.7rem;
}

@media screen and (max-width: 568px) {
    .finish {
        padding: 4rem 10px;
    }
    
    p {
        font-size: 2rem;
        line-height: 3rem;
    }

}
</style>