function renderBubbleChart() {
    d3.csv("airline largeness.csv", function (raw_data) {
        const data = raw_data.map(d => ({id: d['ID'], name: d['OP_CARRIER'], value: d['SUM'], airline: d['AIRLINE']}))
        const json = {'children': data}
        const diameter = 600
        const color = d3.scaleSequential()
            .domain([0, data.length - 1])
            .interpolator(d3.interpolateViridis);

        const bubble = d3.pack()
            .size([diameter, diameter])
            .padding(10);
        const margin = {
            left: 0,
            right: 400,
            top: 0,
            bottom: 0
        }

///////////////////////////////////////////////////////////////////////////
        const tooltip = d3.select('.bubbleChart')
            .append("div")
            .attr("class", "tooltip-d3")
            .style("visibility", "hidden")
            .style("background-color", "rgba(0, 0, 0, 0.75)")
            .style("color", "white")
            // .style("position", "absolute")
            .style("padding", "8px")
            .style("z-index", "10")
            .style("border-radius", "6px")
            .style("font", "12px sans-serif")

        const handleBubbleOnClick = (d) => {
            console.log('Bubble:', d.data.name)
            const op_carrier = d.data.name;
            update_2(op_carrier)
        }

        const svg = d3.select('.bubbleChart').append('svg')
            .attr('viewBox', `0 0 ${(diameter + margin.right)} ${diameter}`)
            .attr('width', (diameter + margin.right))
            .attr('height', diameter)
            .attr('class', 'chart-svg');

        const root = d3.hierarchy(json)
            .sum(function (d) {
                return d.value;
            })
            .sort(function (a, b) {
                return b.value - a.value;
            });
        bubble(root);

        const node = svg.selectAll('.node')
            .data(root.children)
            .enter()
            .append('g').attr('class', 'node')
            .attr('transform', function (d) {
                return 'translate(' + d.x + ' ' + d.y + ')';
            })
            .append('g').attr('class', 'graph');

        node.append("circle")
            .attr("r", function (d) {
                return d.r;
            })
            .attr("class", "bubbleCircle")
            .style("fill", function (d) {
                // console.log(color(d.data.id))
                return color(d.data.id);
            })
            .on("click", (d) => {
                handleBubbleOnClick(d)
            })
            .on("mouseover", function (d) {
                d3.select(this)
                    .attr("r", d.r + 2);
                tooltip.text(`${d.data.name} : ${d.value} flights`);
                tooltip.style("visibility", "visible");
            })
            .on("mousemove", function () {
                return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
            })
            .on("mouseout", function (d) {
                d3.select(this)
                    .attr("r", d.r - 2);
                return tooltip.style("visibility", "hidden");
            });

        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function (d) {
                return d.data.name;
            })
            .style("fill", "#ffffff")
            .on("mouseover", function (d) {
                d3.select(this)
                    .style("cursor", "default");
                tooltip.style("visibility", "visible");
            })
            .on("mousemove", function () {
                return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
            })
            .on("mouseout", function (d) {
                d3.select(this)
                    .style("cursor", "default");
                return tooltip.style("visibility", "hidden");
            });

/////////////////////////////////////////////////////////////////////////
        const legend = svg.selectAll(".legend")
            .data(data).enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", "translate(" + 780 + "," + 120 + ")");
// .attr("transform", "translate(" + 0 + "," + 120 + ")");


        legend.append("rect")
            .attr("x", 0)
            .attr("y", function (d, i) {
                return 20 * i;
            })
            .attr("width", 15)
            .attr("height", 15)
            .style("fill", function (d) {
                return color(d.id)
            });


        legend.append("text")
            .attr("x", 25)
            .attr("text-anchor", "start")
            .attr("dy", "1em")
            .attr("font-size", "12px")
            .attr("y", function (d, i) {
                return 20 * i;
            })
            .text(function (d) {
                return `${d.name} : ${d.airline}`;
            })
            .on("mouseover", function (d) {
                const circle = d3.selectAll('.bubbleCircle').filter((data) => data.data.name == d.name)
                circle
                    .attr("r", (curCir) => {
                        return curCir.r + 2
                    })
                    .style("cursor", "default");
            })
            .on("mouseout", function (d) {
                d3.select(this)
                const circle = d3.selectAll('.bubbleCircle').filter((data) => data.data.name == d.name);
                circle
                    .attr("r", (curCir) => {
                        return curCir.r - 2
                    })
                    .style("cursor", "default");
            });


        legend.append("text")
            .attr("x", 31)
            .attr("dy", "-.2em")
            .attr("y", -10)
            .text("Airlines")
            .attr("font-size", "17px");
    })
}

renderBubbleChart()
