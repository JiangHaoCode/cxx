<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>d3.js</title>
	<link rel="stylesheet" href="">
	<script src="https://d3js.org/d3.v6.min.js"></script>
	<style>
		#chart div {
			display: inline-block;
			background: #4285F4;
			width: 20px;
			margin-right: 3px;
		}
	</style>
</head>
<body>
	<div id="chart">
	</div>
</body>
<script>
	// d3.select('#chart')
	// .selectAll("div")
	// .data([4, 8, 15, 16, 23, 42])
	// .enter()
	// .append("div")
	// .style("height", (d) => d + 'px')

	d3.select('#chart')
  .selectAll("div")
  .data([4, 8, 15, 16, 23, 42])
  .enter()
  .append("div")
  .style("height", d=> d + "px")
</script>
</html>