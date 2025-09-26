import './index.css';
import Schedule from '../data/schedule.json';
import React from 'react'

const tableElement = () => {
	return (

		<table id="table-element">
			<thead id="table-head">
				<tr>
					<td className="lessons-info">Ora inceputului</td>
					<td className="lessons-info">Disciplina</td>
					<td className="lessons-info">Tipul lectiei</td>
					<td className="lessons-info">Auditoria</td>
					<td className="lessons-info">Profesorul</td>
				</tr>
			</thead>
			<tbody id="table-body">
			{Object.entries(Schedule).map(([key, items]) => (
				<React.Fragment key={key}>
				<tr key={key}>
					<td className='day-name' colSpan={5}>{key}</td>
				</tr>
			{items.map((item, key) => (
				<tr key={key}>
					<td>{item.hour}</td>
					<td>{item.discipline}</td>
					<td>{item.lessonType}</td>
					<td>{item.aud}</td>
					<td>{item.professor}</td>
				</tr>
				))}
					</React.Fragment>
			))}
			</tbody>
		</table>
	)
}

export default tableElement;