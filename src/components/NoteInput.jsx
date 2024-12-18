import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      imageUrl: '', // Menyimpan shape origami yang dipilih
      charRemaining: 50,
      dropdownVisible: false, // Untuk menampilkan/menyembunyikan dropdown
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onShapeChangeHandler = this.onShapeChangeHandler.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const input = event.target.value;
    const maxLength = 50;
    this.setState({
      title: event.target.value,
      charRemaining: maxLength - input.length > 0 ? maxLength - input.length : 0,
    });
  }

  onBodyChangeEventHandler(event) {
    const input = event.target.value;
    this.setState({
      body: input,
    });
  }

  onShapeChangeHandler(event) {
    const selectedValue = event.target.value;
    this.setState({
      imageUrl: selectedValue,
      dropdownVisible: false,
    });

  }

  toggleDropdown() {
    this.setState((prevState) => ({
      dropdownVisible: !prevState.dropdownVisible,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    alert('Letter submitted successfully!');

    // console.log('Title:', this.state.title);
    // console.log('Body:', this.state.body);
    // console.log('Shapes:', this.state.imageUrl);

    // Reset state untuk mengosongkan input setelah submit
    this.setState({
      title: '',
      body: '',
      imageUrl: '',
      charRemaining: 50,
      dropdownVisible: false,
    });
  }


  render() {
    const shapes = [
      { name: 'bird', value: './images/bird.png', img: './images/bird.png' },
      { name: 'boat', value: './images/boat.png', img: './images/boat.png' },
      { name: 'cicada', value: './images/cicada.svg', img: './images/cicada.svg' },
      { name: 'crab', value: './images/crab.png', img: './images/crab.png' },
      { name: 'frog', value: './images/frog.png', img: './images/frog.png' },
      { name: 'heart', value: './images/heart.png', img: './images/heart.png' },
      { name: 'pink rabbit', value: './images/pinkrabbit.png', img: './images/pinkrabbit.png' },
      { name: 'plane', value: './images/plane.png', img: './images/plane.png' },
      { name: 'rabbit', value: './images/rabbit.png', img: './images/rabbit.png' },
      { name: 'yellow bird', value: './images/yellowbird.png', img: './images/yellowbird.png' },
    ];

    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Characters remaining: {this.state.charRemaining}
        </p>
        <input
          type="text"
          placeholder="Enter recipient's name"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          maxLength="50"
          required
        />
        <textarea
          type="text"
          placeholder="Write your message here..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          maxLength="100"
          required
        />

        <div className="dropdown">
          <button
            type="button"
            onClick={this.toggleDropdown}
            className="dropdown-toggle"
          >
            {this.state.imageUrl
              ? `Selected shape: ${shapes.find(shape => shape.value === this.state.imageUrl)?.name || 'Choose shape'}`
              : "Select an origami shape"}
          </button>

          {this.state.dropdownVisible && (
            <div className="dropdown-menu">
              <div className="shape-options">
                {shapes.map((shape) => (
                  <label key={shape.value}>
                    <input
                      type="radio"
                      name="shape" // Semua input radio memiliki nama yang sama
                      value={shape.value}
                      checked={this.state.imageUrl === shape.value}
                      onChange={this.onShapeChangeHandler}
                    />
                    <img src={shape.img} alt={shape.value} className="shape-img" />
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NoteInput;
