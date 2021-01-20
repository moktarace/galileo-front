import * as React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            quote: "Le discours progressiste",
            answer: "Vous êtes bête contrairement à moi\n(Xavier Gorce) qui suit intelligent"
        };
    }

    public componentDidMount() {
        this.renderCanvas(this.state.quote, this.state.answer);
    }

    public componentDidUpdate() {
        this.renderCanvas(this.state.quote, this.state.answer);
    }

    public renderCanvas(quote: string, answer: string) {
        var canvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (canvas === null) {
            return;
        }
        let context = canvas.getContext('2d')!;
        let img = new Image();
        img.src = process.env.PUBLIC_URL + "/background.png";
        img.onload = () => {
            let lineHeight = 18;
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#000000";
            context.font = lineHeight + "px 'Indie Flower'";
            context.textAlign = "center";
            let x = 150;
            let y = 40;
            let lines = quote.split("\n");
            for (let i = 0; i < lines.length; i += 1) {
                context.fillText(lines[i], x, y + i * lineHeight);
            }
            x = 420;
            y = 50;
            lines = answer.split("\n");
            for (let i = 0; i < lines.length; i += 1) {
                context.fillText(lines[i], x, y + i * lineHeight);
            }
        };
    }

    public downloadCanvas() {
        var link = document.createElement('a');
        link.download = 'gorce.jpeg';
        link.href = (document.getElementById('canvas') as HTMLCanvasElement).toDataURL('image/jpeg')
        link.click();
    }

    public handleQuoteChange(event: any) {
        this.setState({
            quote: event.target.value
        });
    }

    public handleAnswerChange(event: any) {
        this.setState({
            answer: event.target.value
        });
    }

    public render() {
        return (
            <div className="container p-3">
                <div className="row justify-content-center mt-5">
                    <div className="col-sm-12 col-md-4 mb-1">
                        <textarea
                            className="form-control"
                            value={this.state.quote}
                            onChange={(event) => this.handleQuoteChange(event)}
                        ></textarea>
                    </div>
                    <div className="col-sm-12 col-md-4 mb-1">
                        <textarea
                            className="form-control"
                            value={this.state.answer}
                            onChange={(event) => this.handleAnswerChange(event)}
                        ></textarea>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-12 d-flex justify-content-center">
                        <canvas
                            className="img-fluid"
                            id="canvas"
                            width="560"
                            height="287"
                        ></canvas>
                    </div>
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
