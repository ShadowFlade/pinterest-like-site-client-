import * as React from 'react';
import { useReducer } from 'react';
import classNames from 'classnames';
import './RegisterModal.scss';
export interface RegisterCubeForm {
  ref: React.MutableRefObject<null | HTMLDivElement>;
}
export type ICubeFace = {
  type?: string;
  step: number;
  placeholder: string;
  inputType: string;
  body: string;
};
export default function RegisterCubeForm({ ref }: RegisterCubeForm) {
  const modalBody = ref;
  ref.current?.classList.add('register');
  const firstCubeFace = (
    <div className="cube__face  cube__face--front" id="step__1">
      <div className="container">
        <input className="label" type="text" placeholder="Please pick a color" disabled />
        <div className="radio">
          <div className="item blue" data-color="blue"></div>
          <div className="item yellow" data-color="yellow"></div>
          <div className="item purple" data-color="purple"></div>
          <div className="item green" data-color="green"></div>
          <div className="item violet" data-color="violet"></div>
        </div>
        <div className="btn" style={{ display: 'none' }}>
          <span data-step="1">Continue</span>
        </div>
      </div>
    </div>
  );
  const cubeFacesData: ICubeFace[] = [
    {
      type: 'bottom',
      step: 2,
      placeholder: "What's your full name ?",
      inputType: 'text',
      body: 'Continue',
    },
    {
      step: 3,
      inputType: 'email',
      body: 'Continue',
      placeholder: 'Tell me your email addresss',
    },
    {
      step: 4,
      inputType: 'password',
      body: 'Continue',
      placeholder: 'Enter your password',
    },
  ];
  const preLastCubeFace = (
    <div className="cube__face" id="step__5">
      <div className="container">
        <select name="fav_color" id="fav_color">
          <option disabled selected>
            Select your favorite Ninja Turtle
          </option>
          <option value="Leo">Leo</option>
          <option value="Mikey">Mikey</option>
          <option value="Donnie">Donnie</option>
          <option value="Raph">Raph</option>
        </select>
        <div className="btn">
          <span data-step="5">Continue</span>
        </div>
      </div>
    </div>
  );
  const lastCubeFace = (
    <div className="cube__face" id="step__6">
      <div className="container">
        <input type="text" className="label" placeholder="Are you amazing ?" disabled />
        <div className="right">
          <label htmlFor="">No</label>
          <div className="checkbox">
            <div className="circle"></div>
          </div>
          <label htmlFor="">Yes</label>
        </div>
      </div>
    </div>
  );

  const regularCubeFaces = cubeFacesData.map(({ type, step, placeholder, body, inputType }) => {
    const cubeFaceClass = classNames({
      cube__face: true,
      [`cube__face--${type}`]: type,
    });
    return (
      <div className={cubeFaceClass} id={`step__${step}`}>
        <div className="container">
          <input type="text" placeholder="What's your full name ?" />
          <div className="btn">
            <span data-step="2">Continue</span>
          </div>
        </div>
      </div>
    );
  });

  const Step = ({ index, done }: { index: number; done: boolean }) => {
    return <div className={`dot step_${index + 1} ${done ? 'done' : null}`}></div>;
  };

  const cubeFaces = [firstCubeFace, ...regularCubeFaces, preLastCubeFace, lastCubeFace];

  type initState = { element: JSX.Element; done: boolean }[];

  const initialState = Array(6).map((item, index) => ({ index, done: false }));

  function reducer(state: any, action: { index: number }) {
    const newState = state
      .slice(0, action.index)
      .concat({ index: action.index, done: true })
      .concat(state.slice(action.index + 1));
    return newState;
  }
  const [state, dispatch]: [initState, any] = useReducer(reducer, initialState);

  const turn: React.MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const target = event.target as HTMLDivElement;
    const step = target.dataset.step;
    dispatch({ index: Number(step) });
  };

  return (
    <div className="scene">
      <div className="cube">
        <nav className="steps">
          {state.map((item, index) => {
            return <Step index={index} done={false} />;
          })}
        </nav>

        {cubeFaces.map((item) => {
          return (
            <div className="cube-face__container" onClick={turn}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="welcome">
        <div className="content">Welcome !</div>
      </div>
      <button></button>
    </div>
  );
}

//Whole js code

// API('YjXjjJ')

// const btn = document.querySelectorAll(".btn span");

// for (let i = 0; i < btn.length; i++) {
// 	btn[i].addEventListener("click", function() {
// 		document
// 			.querySelector(
// 				"nav .dot.step_" + (parseInt(this.getAttribute("data-step")) + 1) + ""
// 			)
// 			.classList.add("done");
// 		turn(parseInt(this.getAttribute("data-step")));
// 	});
// }

// function turn(step) {
// 	if (!!document.querySelector("#step__" + (step - 1))) {
// 		document.querySelector("#step__" + (step - 1)).classList.add("hidden");
// 	}

// 	document.querySelector("#step__" + step).classList.add("cube__face--top");
// 	document.querySelector("#step__" + step).classList.remove("cube__face--front");

// 	step += 1;
// 	if (!!document.querySelector("#step__" + step)) {
// 		document.querySelector("#step__" + step).classList.add("cube__face--front");
// 		if (!!document.querySelector("#step__" + step + " input")) {
// 			document.querySelector("#step__" + step + " input").focus();
// 		}
// 		document
// 			.querySelector("#step__" + step)
// 			.classList.remove("cube__face--bottom");
// 	}

// 	step += 1;
// 	if (!!document.querySelector("#step__" + step)) {
// 		document.querySelector("#step__" + step).classList.add("cube__face--bottom");
// 	}
// }

// const colors = document.querySelectorAll(".radio .item");
// const btns = document.querySelectorAll(".btn");

// for (var i = 0; i < colors.length; i++) {
// 	colors[i].addEventListener("click", function() {
// 		this.closest(".container")
// 			.querySelector(".btn span")
// 			.click();
// 		document.body.classList.add(this.getAttribute("data-color"));
// 		for (var j = 0; j < btns.length; j++) {
// 			btns[j].classList.add(this.getAttribute("data-color"));
// 		}
// 		document
// 			.querySelector(".checkbox")
// 			.classList.add(this.getAttribute("data-color"));
// 	});
// }

// document.querySelector(".checkbox").addEventListener("click", function() {
// 	this.classList.toggle("checked");
// 	document.querySelector(".scene").classList.add("end");

// 	document.querySelector(".welcome").classList.add("show");
// });

// const inputs = document.querySelectorAll(".cube__face input");
// for (let i = 0; i < inputs.length; i++) {
// 	inputs[i].addEventListener("keyup", function(e) {
// 		if (this.getAttribute("type") == "text") {
// 			if (this.value.length > 1) {
// 				this.closest(".container")
// 					.querySelector(".btn")
// 					.classList.add("show");
// 				if (e.keyCode == 13) {
// 					this.closest(".container")
// 						.querySelector(".btn span")
// 						.click();
// 				}
// 			} else {
// 				this.closest(".container")
// 					.querySelector(".btn")
// 					.classList.remove("show");
// 			}
// 		}
// 		if (this.getAttribute("type") == "email") {
// 			if (this.value.length > 2 && this.value.includes("@")) {
// 				this.closest(".container")
// 					.querySelector(".btn")
// 					.classList.add("show");
// 				if (e.keyCode == 13) {
// 					this.closest(".container")
// 						.querySelector(".btn span")
// 						.click();
// 				}
// 			} else {
// 				this.closest(".container")
// 					.querySelector(".btn")
// 					.classList.remove("show");
// 			}
// 		}
// 		if (this.getAttribute("type") == "password") {
// 			if (this.value.length > 3) {
// 				this.closest(".container")
// 					.querySelector(".btn")
// 					.classList.add("show");
// 				if (e.keyCode == 13) {
// 					this.closest(".container")
// 						.querySelector(".btn span")
// 						.click();
// 				}
// 			} else {
// 				this.closest(".container")
// 					.querySelector(".btn")
// 					.classList.remove("show");
// 			}
// 		}
// 	});
// }

// document.querySelector("select").addEventListener("change", function() {
// 	this.closest(".container")
// 		.querySelector(".btn")
// 		.classList.add("show");
// });
