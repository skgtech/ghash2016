var fs = require('fs');

if (!process.argv[2] || !process.argv[3]) {
  console.log('npm . INPUT_FILE OUTPUT_FILE');
  process.exit(0);
}

var content = fs.readFileSync(process.argv[2]).toString();
var data = content.split('\n');
var meta = data.splice(0, 1)[0];

var table = create_table(data);

var hor_cmds = generate_horizontal_commands(table, "#");
var ver_cmds = generate_vertical_commands(table, "#");

if (hor_cmds.length < ver_cmds.length) {
  export_commands(process.argv[3], hor_cmds);
} else {
  export_commands(process.argv[3], ver_cmds);
}


function create_table(data) {
  var table = [];
  var rows = data.length - 1;
  for (var i = 0; i < rows; i++) {
    table[i] = data[i].split('');
  }
  return table;
}

function generate_horizontal_commands(table, char) {
  var cmd = [];
  for (var r = 0; r < table.length; r++) {
    for (var c = 0; c < table[r].length; c++) {
      var max = find_horizontal(r, c, char, table);
      if (max !== false) {
        cmd.push(paint_line(r, c, r, max));
        c = max;
      }
    }
  }
  return cmd;
}

function generate_vertical_commands(table, char) {
  var cmd = [];

  for (var c = 0; c < table[0].length; c++) {
    for (var r = 0; r < table.length; r++) {
      var max = find_vertical(r, c, char, table);

      if (max !== false) {
        cmd.push(paint_line(r, c, max, c));
        r = max;
      }

    }
  }
  return cmd;
}

function paint_line(r1, c1, r2, c2) {
  if (r1 == r2 || c1 == c2)
    return "PAINT_LINE " + r1 + " " + c1 + " " + r2 + " " + c2;
  else
    throw ("Error in paint_line");
}

function paint_square(r, c, dim) {
  return "PAINT_SQUARE " + r + " " + c + " " + dim;
}

function find_horizontal(row, col, char, table) {
  var max = table[row].length - 1;
  for (var c = col; c <= max; c++) {

    if (table[row][c] != char) {

      if (c == col) {
        return false;
      }
      return c - 1;
    }
  }
  return max;
}

function find_vertical(row, col, char, table) {
  var max = table.length - 1;

  for (var r = row; r <= max; r++) {
    if (table[r][col] != char) {

      if (r == row) {
        return false;
      }
      return r - 1;
    }
  }
  return max;
}

function export_commands(file, commands) {
  var out = commands.length + "\n";
  out += commands.join("\n");
  out += "\n";

  fs.writeFileSync(file, out, "utf-8");
  console.log("Output wrote to file: " + file);
  console.log("Max Score: " + meta.split(" ")[0] * meta.split(" ")[1]);
  console.log("Current: " + (meta.split(" ")[0] * meta.split(" ")[1] - commands.length));
  console.log("Commands: " + commands.length);
}
