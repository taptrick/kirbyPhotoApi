const path = require('path');
const express = require('express');
const cors = require('cors'); // Import the CORS package
const app = express();

// Use CORS middleware
app.use(cors()); // Allow requests from any origin (you can customize this)

// Serve images from the 'images' directory
app.use('/my-api/images', express.static(path.join(__dirname, 'images')));

// API route to get image data
app.get('/api/images', (req, res) => {
  res.json([
    { id: '1',
      urls: { small: '/my-api/images/kirby1.jpeg' }, 
      alt_description: 'Kirby 1',
      memory: 'Kirby laying on the floor pillow'
     },
    { id: '2', 
      urls: { small: '/my-api/images/kirby2.jpeg' }, 
      alt_description: 'Kirby 2',
      memory: 'Kirby and I singing in the car'
    },
    { id: '3', 
      urls: { small: '/my-api/images/koraandkirby.jpeg' }, 
      alt_description: 'Kirby 3',
      memory: 'The girls at our wedding'
    },
    { id: '4', 
      urls: { small: '/my-api/images/ultraMiniDuck.jpeg' }, 
      alt_description: 'Kirby 4',
      memory: 'Kirb and ultra mini duck'
    },
    { id: '5', 
      urls: { small: '/my-api/images/bdayGirl.jpeg' }, 
      alt_description: 'Kirby 5',
      memory: 'The birthday girl!'
    },
    { id: '6', 
      urls: { small: '/my-api/images/reindeer.jpeg' }, 
      alt_description: 'Kirby 6',
      memory: 'Reindeer Kirb!'
    },
    { id: '7', 
      urls: { small: '/my-api/images/lol.jpeg' }, 
      alt_description: 'Kirby 7',
      memory: 'Very discontent'
    },
    { id: '8', 
      urls: { small: '/my-api/images/yogurt.jpeg' }, 
      alt_description: 'Kirby 8',
      memory: 'Yummy!'
    }

  ]);
});

app.get('/api/images/:id', (req, res) => {
  const images = [
    { id: '1', urls: { small: '/my-api/images/kirby1.jpeg' }, alt_description: 'Kirby 1', memory: 'Kirby laying on the floor pillow' },
    { id: '2', urls: { small: '/my-api/images/kirby2.jpeg' }, alt_description: 'Kirby 2', memory: 'Kirby and I singing in the car' },
    { id: '3', urls: { small: '/my-api/images/koraandkirby.jpeg' }, alt_description: 'Kirby 3', memory: 'The girls at our wedding' },
    { id: '4', urls: { small: '/my-api/images/ultraMiniDuck.jpeg' }, alt_description: 'Kirby 4', memory: 'Kirb and ultra mini duck' },
    { id: '5', urls: { small: '/my-api/images/bdayGirl.jpeg' }, alt_description: 'Kirby 5', memory: 'The birthday girl!' },
    { id: '6', urls: { small: '/my-api/images/reindeer.jpeg' }, alt_description: 'Kirby 6', memory: 'Reindeer Kirb!' },
    { id: '7', urls: { small: '/my-api/images/lol.jpeg' }, alt_description: 'Kirby 7', memory: 'Very discontent' },
    { id: '8', urls: { small: '/my-api/images/yogurt.jpeg' }, alt_description: 'Kirby 8', memory: 'Yummy!' }
  ];

  const image = images.find(img => img.id === req.params.id);

  if (image) {
    res.json(image);
  } else {
    res.status(404).json({ error: 'Image not found' });
  }
});

// API for a random fact
app.get('/api/fact', (req, res) => {
  res.json([
    { id: '1',
      kirbyFact: 'Kirby is very fuzzy'
     },
    { id: '2', 
      kirbyFact: 'Kirby is very snuggly'
    }

  ]);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
