export const BLOCK_CATEGORIES = {
    motion: {
      name: 'Motion',
      color: 'bg-blue-500',
      blocks: [
        { 
          type: 'move', 
          label: 'Move {n} steps', 
          defaultValue: 10,
          parameterType: 'number'
        },
        { 
          type: 'turn_right', 
          label: 'Turn right {n} degrees', 
          defaultValue: 15,
          parameterType: 'number'
        },
        { 
          type: 'turn_left', 
          label: 'Turn left {n} degrees', 
          defaultValue: 15,
          parameterType: 'number'
        },
        { 
          type: 'goto', 
          label: 'Go to x: {x} y: {y}', 
          defaultX: 0, 
          defaultY: 0,
          parameterType: 'position'
        }
      ]
    },
    looks: {
      name: 'Looks',
      color: 'bg-purple-500',
      blocks: [
        { type: 'show', label: 'Show' },
        { type: 'hide', label: 'Hide' },
        { 
          type: 'size', 
          label: 'Set size to {n}%', 
          defaultValue: 100,
          parameterType: 'number'
        }
      ]
    },
    control: {
      name: 'Control',
      color: 'bg-yellow-500',
      blocks: [
        { 
          type: 'wait', 
          label: 'Wait {n} seconds', 
          defaultValue: 1,
          parameterType: 'number'
        },
        { 
          type: 'repeat', 
          label: 'Repeat {n} times', 
          defaultValue: 10,
          parameterType: 'number',
          isContainer: true
        }
      ]
    }
  };