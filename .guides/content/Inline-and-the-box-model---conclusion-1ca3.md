All in all, this behaviour seems coherent. An inline element is supposed to be in the flow with the other elements around it.

To summarize in one table:

<table>
<thead>
<tr>
<th width="30%" style="text-align:center">Property applied</th>
<th width="70%" style="text-align:left">Result</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code>background-color</code></td>
<td style="text-align:left">Displays normally.</td>
</tr>
<tr>
<td style="text-align:center"><code>border</code></td>
<td style="text-align:left">Displays normally.</td>
</tr>
<tr>
<td style="text-align:center"><code>margin</code></td>
<td style="text-align:left">Only left and right margins are applied, the top and bottom are ignored.</td>
</tr>
<tr>
<td style="text-align:center"><code>padding</code></td>
<td style="text-align:left">Same behaviour as margins for the text around. Normal behaviour in regard to the background color and border.</td>
</tr>
<tr>
<td style="text-align:center"><code>height</code></td>
<td style="text-align:left">No effect.</td>
</tr>
<tr>
<td style="text-align:center"><code>width</code></td>
<td style="text-align:left">No effect.</td>
</tr>
<tr>
<td style="text-align:center"><code>font-size</code></td>
<td style="text-align:left">Displays normally.</td>
</tr>
<tr>
<td style="text-align:center"><code>line-height</code></td>
<td style="text-align:left">Displays normally. Possible alternative for top and bottom margins/paddings.</td>
</tr>
</tbody>
</table>